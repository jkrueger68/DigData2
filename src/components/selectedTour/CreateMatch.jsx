import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
	const [teamsGenerated, setTeamsGenerated] = useState(false);
	const [activeId, setActiveId] = useState(null);
	const [hoveredTeamId, setHoveredTeamId] = useState(null);
	const [teamAmount, setTeamAmount] = useState({
		count: 0,
		size: 0,
	});
	const [tournamentInfo, setTournamentInfo] = useState({
		name: "",
		index: "",
		players: [],
		teams: [],
	});

	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (state?.type === "INDEX_TO_CREATE_MATCH") {
			setTournamentInfo((prevState) => ({
				...prevState,
				name: state.name,
				index: state.payload,
				players: state.players,
			}));
			console.log("selectedPlayers state: ", tournamentInfo);
			console.log("Team Amount: ", teamAmount);
		}
	}, [state, setTournamentInfo]);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor),
		useSensor(TouchSensor)
	);

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
	
		const foundTeamIndex = teams.findIndex(team => 
			team.some(player => player.id === overId)
		);

		if (foundTeamIndex !== -1) {
			setHoveredTeamId(`team-${foundTeamIndex}`);
		} else {
			setHoveredTeamId(null);
		}
	};

	const getActivePlayer = () => {
		for (let team of teams) {
			const player = team.find((p) => p.id === activeId);
			if (player) {
				return player;
			}
		}
		return null;
	};

	const countAmountSelected = (eventKey) => {
		setTeamAmount((prevState) => ({
			...prevState,
			count: eventKey,
		}));
	};

	const handleGenerateTeams = () => {
		const organizedTeams = organizeTeams();
		console.log("Organized Teams:", organizedTeams); // Debugging log
		setTeams(organizedTeams);
		setTournamentInfo((prevState) => ({
			...prevState,
			teams: organizedTeams,
		}));
		setTeamsGenerated(true);
	};

	const handleSubmitTeams = () => {
        const TournamentIndexTransfer = {
            type: "INDEX_TO_SELECTED",
            payload: tournamentInfo.index,
            name: tournamentInfo.name,
            updatedPlayers: tournamentInfo.players, 
			teams: tournamentInfo.teams, 
        };
    
        navigate(`/selected/${tournamentInfo.name}`, {
            state: TournamentIndexTransfer,
        });
    };

	const organizeTeams = () => {
		const teamSize = Math.ceil(
			tournamentInfo.players.length / teamAmount.count
		);
		let teams = [];

		for (let i = 0; i < teamAmount.count; i++) {
			teams.push(
				tournamentInfo.players.slice(i * teamSize, (i + 1) * teamSize)
			);
		}
		return teams;
	};

	return (
		<React.Fragment>
			<div className="row justify-content-center">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header>
							<Card.Title className="mt-2">
								Create the Teams for {tournamentInfo.name}
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="DROPDOWNS" className="row mt-1">
								<div className="col-2 d-none d-xxl-block empty"></div>
								<div className="col">
									Number of players: {tournamentInfo.players.length}
								</div>
								<div className="col">
									<Dropdown as={ButtonGroup} onSelect={countAmountSelected}>
										<Button variant="outline-dark">
											# of Teams{teamAmount.count > 0 ? ` = ${teamAmount.count}` : ""}
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
								{/* <div className="col">
										<Dropdown as={ButtonGroup} onSelect={sizeAmountSelected}>
											<Button variant="outline-dark">Team Size</Button>
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
									</div> */}
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
												<td className="fw-bolder">Absent players are given:</td>
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
															<strong>No score:</strong>
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
															<strong>Lowest team score:</strong>
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
							<div id="GENERATEBUTTON" className="row">
								<div className="col">
									<Button
										variant="primary shadow mt-3"
										onClick={handleGenerateTeams}
									>
										Generate Teams
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
					{teamsGenerated && (
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
