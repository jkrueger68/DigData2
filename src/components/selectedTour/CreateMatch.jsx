import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import { Accordion } from "react-bootstrap";

function CreateMatch() {
	const [teams, setTeams] = useState([]);
	const [teamsGenerated, setTeamsGenerated] = useState(false);
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

	// const navigate = useNavigate();
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

	const countAmountSelected = (eventKey) => {
		setTeamAmount((prevState) => ({
			...prevState,
			count: eventKey,
		}));
	};

	const handleGenerateTeams = () => {
		const organizedTeams = organizeTeams();
		setTeams(organizedTeams);
		setTournamentInfo((prevState) => ({
			...prevState,
			teams: organizedTeams,
		}));
		setTeamsGenerated(true);
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
							<Card.Title className="mt-2">Create the Teams for {tournamentInfo.name}</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="DROPDOWNS" className="row mt-1">
								<div className="col-2 d-none d-xxl-block empty"></div>
								<div className="col">
									Number of players: {tournamentInfo.players.length}
								</div>
								<div className="col">
									<Dropdown as={ButtonGroup} onSelect={countAmountSelected}>
										<Button variant="outline-dark"># of Teams</Button>
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
									{teams.map((team, teamIndex) => (
										<Accordion defaultActiveKey={['0']} alwaysOpen>
											<Accordion.Item
												eventKey={teamIndex}
												id={`TEAMSTABLE_${teamIndex}`}
												border="secondary"
												className="shadow"
											>
												<Accordion.Header>Team {teamIndex + 1}</Accordion.Header>
												<Accordion.Body style={{ padding: 0 }}>
													<Table 
														responsive="sm"
														size="sm"
														striped bordered hover
														className="align-middle"
													>
														<thead>
															<tr>
																<th>Name</th>
																<th>Gender</th>
																<th>Skill Level</th>
																<th>Average</th>
																<th>Edit</th>
															</tr>
														</thead>
														<tbody>
															{team.map((player, index) => (
																<tr key={player.id}>
																	<td>
																		{player.firstName} {player.lastName}
																	</td>
																	<td>{player.gender}</td>
																	<td>{player.skillLevel}</td>
																	<td>{player.average}</td>
																	<td>
																		<Button
																			variant="warning"
																			onClick={() => handleEditPlayer(player)}
																		>
																			Switch Team
																		</Button>
																	</td>
																</tr>
															))}
														</tbody>
													</Table>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									))}
									<div id="TOSCORESBUTTON" className="row">
							<div className="col">
								<Button variant="secondary shadow mt-3">
									Back to Tournament Home
								</Button>
							</div>
						</div>
								</Card.Body>
							</Card>
						)} 
						
				</div>
			</div>
		</React.Fragment>
	);
}

export default CreateMatch;
