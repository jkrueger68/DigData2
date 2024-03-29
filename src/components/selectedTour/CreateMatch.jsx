import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TournamentContext } from '../TournamentContext';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
	DragOverlay,
} from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
	Accordion,
	Table,
	Dropdown,
	ButtonGroup,
	Button,
	Card,
} from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import DraggablePlayerOverlay from "./DraggablePlayerOverlay";
import HoverContext from "./HoverContext";

function CreateMatch() {
	const [teams, setTeams] = useState([]);
	const [showTeams, setShowTeams] = useState(false);
	const [activeId, setActiveId] = useState(null);
	const [hoveredTeamId, setHoveredTeamId] = useState(null);
	const [presentPlayers, setPresentPlayers] = useState([]);
	const [nonPresentPlayers, setNonPresentPlayers] = useState([]);
	const [currentTournament, setCurrentTournament] = useState(null);
	const [teamAmount, setTeamAmount] = useState({
		count: 0,
	});
	const {
		tournamentInfo,
		updateTournamentInfo,
		selectTournament,
		getSelectedTournament
	} = useContext(TournamentContext);
	

	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		const thisTournament = getSelectedTournament();

		if (state?.type === "INDEX_TO_CREATE_MATCH") {
            selectTournament(state.tourId);
			
			const presentPlayers = thisTournament.presentPlayers.filter(player => player.present === "yes");
			const absentPlayers = thisTournament.presentPlayers.filter(player => player.present !== "yes");
			
			if (thisTournament) {
				setCurrentTournament(thisTournament);
				setPresentPlayers(presentPlayers);
				setNonPresentPlayers(absentPlayers || []);
			}
	

			if (state.teams) {
				setTeamAmount({ count: state.teams.length, size: 0 });
				setTeams(state.teams);
			}
	
			console.log("selectedPlayers state: ", tournamentInfo);
			console.log("Team Amount: ", teamAmount);
		}
	}, [getSelectedTournament, setCurrentTournament]);

	console.log("currentTournament at end of CreateMatch useEffect: ", currentTournament);
	const tournamentName = currentTournament?.name || tournamentInfo?.name || 'Loading tournament...';

	useEffect(() => {
		const updatedTeams = organizeTeams(presentPlayers, teamAmount.count);
		setTeams(updatedTeams);

		setCurrentTournament(prevState => ({
			...prevState,
			teams: updatedTeams,
		}));

		generateTeams();
	}, [presentPlayers, teamAmount.count]);


	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor),
		useSensor(TouchSensor)
	);

	const getActivePlayer = () => {
		for (let team of teams) {
			const player = team.find((p) => p.id === activeId);
			if (player) {
				return player;
			}
		}
		return null;
	};

	const handleDragStart = (event) => {
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			let newTeams = [...teams];
			let sourceTeam, targetTeam, sourcePlayerIndex, targetTeamIndex;

			newTeams.forEach((team, index) => {
				const foundIndex = team.findIndex((player) => player.id === active.id);
				if (foundIndex !== -1) {
					sourceTeam = team;
					sourcePlayerIndex = foundIndex;
				}
				if (team.some((player) => player.id === over.id)) {
					targetTeamIndex = index;
				}
			});

			if (sourceTeam && targetTeamIndex !== undefined) {
				const [movedPlayer] = sourceTeam.splice(sourcePlayerIndex, 1);
				newTeams[targetTeamIndex].push(movedPlayer);
				setTeams(newTeams);
			}

			setCurrentTournament((prevState) => ({
				...prevState,
				teams: newTeams,
			}));

			setHoveredTeamId(null);
		}
	};

	const handleDragOver = (event) => {
		const { over } = event;
		const overId = over?.id;

		if (!overId) {
			setHoveredTeamId(null);
			return;
		}

		const foundTeamIndex = teams.findIndex((team) =>
			team.some((player) => player.id === overId)
		);

		if (foundTeamIndex !== -1) {
			setHoveredTeamId(`team-${foundTeamIndex}`);
		} else {
			setHoveredTeamId(null);
		}
	};

	const countAmountSelected = (eventKey) => {
		setTeamAmount((prevState) => ({
			...prevState,
			count: eventKey,
		}));
	};

	const generateTeams = () => {
		if (presentPlayers && presentPlayers.length > 0 && teamAmount.count > 0) {
			const organizedTeams = organizeTeams(presentPlayers, teamAmount.count);
			setTeams(organizedTeams);
	
			setCurrentTournament(prevState => ({
				...prevState,
				teams: organizedTeams,
			}));
			setShowTeams(true);
		} else {
			console.log("Present players or team count is undefined or invalid");
		}
	};
	

	const handleSubmitTeams = () => {

		// const TournamentIndexTransfer = {
		//   type: "INDEX_TO_SELECTED",
		//   payload: tournamentInfo.index,
		//   name: tournamentInfo.name,
		//   updatedPlayers: presentPlayers, 
		//   updatedTeams: teams, 
		// };
	  
		// navigate(`/selected/${tournamentInfo.name}`, {
		//   state: TournamentIndexTransfer,
		// });
	};

	const handleSwitchToPresent = (playerId) => {
		let playerToUpdate = presentPlayers.find(player => player.id === playerId) 
							|| nonPresentPlayers.find(player => player.id === playerId);
	
		if (!playerToUpdate) {
			console.error("Player not found");
			return;
		}
	
		const isPresent = playerToUpdate.present === "yes";
		playerToUpdate.present = isPresent ? "no" : "yes";

		if (isPresent) {
			setPresentPlayers(presentPlayers.filter(player => player.id !== playerId));
			setNonPresentPlayers([...nonPresentPlayers, playerToUpdate]);
		} else {
			setNonPresentPlayers(nonPresentPlayers.filter(player => player.id !== playerId));
			setPresentPlayers([...presentPlayers, playerToUpdate]);
		}

		setCurrentTournament(prevState => {
			const updatedPresentPlayers = prevState.presentPlayers.map(player => 
				player.id === playerId ? { ...player, present: playerToUpdate.present } : player
			);
	
			return { ...prevState, presentPlayers: updatedPresentPlayers };
		});
	};
	

	const organizeTeams = (players, teamCount) => {
		const totalPlayers = players.length;
		const baseTeamSize = Math.floor(totalPlayers / teamCount);
		let remainder = totalPlayers % teamCount;
		let organizedTeams = [];
	
		let playerIndex = 0;
		for (let i = 0; i < teamCount; i++) {
			let teamSize = baseTeamSize + (remainder > 0 ? 1 : 0);
			remainder--;
	
			let team = players.slice(playerIndex, playerIndex + teamSize);
			playerIndex += teamSize;
	
			organizedTeams.push(team);
		}
	
		return organizedTeams;
	};
	

	const handleStartGames = () => {
        navigate(`/selected/${currentTournament.name}/submitScores`, {
            state: { teams: teams }});
	};

	return (
		<React.Fragment>
			<div className="row justify-content-center">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header>
							<Card.Title className="mt-2">
								Create the Teams for {tournamentName}
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="DROPDOWNS" className="row mt-1">
								<div className="col-2 d-none d-xxl-block empty"></div>
								<div className="col">
									Number of players: {presentPlayers.length}
								</div>
								<div className="col">
									<Dropdown as={ButtonGroup} onSelect={countAmountSelected}>
										<Button variant="outline-dark">
											# of Teams
											{teamAmount.count > 0 ? ` = ${teamAmount.count}` : ""}
										</Button>
										<Dropdown.Toggle
											split
											variant="secondary"
											id="dropdown-custom-2"
										/>
										<Dropdown.Menu>
											{Array.from({ length: 10 }, (_, i) => i + 1).map(
												(number) => (
													<Dropdown.Item
														key={number}
														eventKey={number.toString()}
													>
														{number}
													</Dropdown.Item>
												)
											)}
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="col-2 d-none d-xxl-block empty"></div>
							</div>
							<br />
							<Card id="GAMESETTINGS" border="secondary" className="shadow">
								<Card.Body>
									<Card.Title> Team Settings</Card.Title>
									<Table
										responsive="sm"
										size="sm"
										className="table-striped-columns align-middle"
									>
										{/* <table className="table table-striped-columns align-middle"> */}
										<tbody className="table-group-divider">
											<tr>
												<th scope="row d-flex" />
												<td className="fw-bolder">Team Placement:</td>
												<td>
													<div className="row align-items-center">
														<div className="col-2 flex-fill">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10 flex-fill">
															<strong>Locked teams:</strong>
															<br />
															Best for competitive tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Unlocked teams:</strong>
															<br />
															Best for recreational tournaments
														</div>
													</div>
												</td>
											</tr>
											<tr className="table-group-divider">
												<th scope="row d-flex" />
												<td className="fw-bolder">Distribute players by:</td>
												<td>
													<div className="row align-items-center">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Gender:</strong>
															<br />
															Best for competitive tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Skill:</strong>
															<br />
															Best for recreational tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Average Points:</strong>
															<br />
															Best for competitive tournaments
														</div>
													</div>
												</td>
											</tr>
										</tbody>
										{/* </table> */}
									</Table>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
					{showTeams && (
						<Card className="text-center">
							<Card.Header>Teams:</Card.Header>
							<Card.Body>
								<HoverContext.Provider
									value={{ hoveredTeamId, setHoveredTeamId }}
								>
									<DndContext
										sensors={sensors}
										onDragStart={handleDragStart}
										onDragEnd={handleDragEnd}
										onDragOver={handleDragOver}
									>
										<Accordion defaultActiveKey="0" alwaysOpen>
											{teams.map((team, index) => {
												const isOver = hoveredTeamId === `team-${index}`;
												const style = isOver
													? { border: "dashed #0d6efd", borderRadius: "5px" }
													: {};

												return (
													<AccordionItem
														key={`team-${index}`}
														team={team}
														teamIndex={index}
														isOver={isOver}
														style={style}
													/>
												);
											})}
											<Accordion.Item>
												<Accordion.Header>Absent Players</Accordion.Header>
												<Accordion.Body>
													<Table
														responsive="sm"
														size="sm"
														striped
														bordered
														hover
														className="align-middle"
													>
														{/* ... No Table Header Content ... */}
														{nonPresentPlayers.map((player) => (
															<tr>
																<td className="col-5">
																	{player.firstName} {player.lastName}
																</td>
																<td className="col">
																	<Button
																		size="sm"
																		variant="warning shadow"
																		onClick={() =>
																			handleSwitchToPresent(player.id)
																		}
																	>
																		Present?
																	</Button>
																</td>
															</tr>
														))}
													</Table>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
										<DragOverlay>
											{activeId ? (
												<DraggablePlayerOverlay player={getActivePlayer()} />
											) : null}
										</DragOverlay>
									</DndContext>
								</HoverContext.Provider>
							</Card.Body>
							<div id="SUBMITTEAMSBUTTON" className="row">
								<div className="col">
									<Button
										variant="secondary shadow mb-3"
										onClick={handleSubmitTeams}
									>
										Submit Teams
                           	 </Button>
                            	<Button
                                	variant="primary shadow mb-3 ml-2" // Added some margin-left for spacing
                                	onClick={handleStartGames}
                            	>
                                	Start Games
									</Button>
								</div>
							</div>
						</Card>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default CreateMatch;
