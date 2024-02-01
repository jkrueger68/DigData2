import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, Outlet, useMatch } from "react-router-dom";
import {TournamentContext} from '../../components/TournamentContext';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RollCall from "./RollCall";

function SelectedHome() {
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	const { tournamentInfo, updateTournamentInfo } = useContext(TournamentContext);

	const navigate = useNavigate();
	const { state } = useLocation();
	const location = useLocation();
	const match = useMatch('/selected/:tournamentName');
	const isExactMatch = match?.pathname === location.pathname;
	const [currentTournament, setCurrentTournament] = useState(null);

	useEffect(() => {
		const state = location.state;
		if (state?.type === "INDEX_TO_SELECTED") {
			const foundTournament = tournamentInfo.find(t => t.id === state.tourId);
			if (foundTournament) {
				setCurrentTournament(foundTournament);
			}
		}
	}, [location.state, tournamentInfo]);

	useEffect(() => {
		console.log("state entering useEffect: ", state);
		if (state?.type === "INDEX_TO_SELECTED") {
			updateTournamentInfo((prevState) => ({
				...prevState,
				name: state.name,
				index: state.payload,
				players: state.updatedPlayers || prevState.players,
				teams: state.updatedTeams || prevState.teams,
			}));
		}
	}, [state]);

	const togglePlayerPresent = (id) => {
		updateTournamentInfo((prevState) => {
			const updatedPlayers = prevState.players.map((player) =>
				player.id === id
					? { ...player, present: player.present === "yes" ? "no" : "yes" }
					: player
			);
			console.log("New players state to be set:", updatedPlayers);
			return { ...prevState, players: updatedPlayers };
		});
	};

	const onManagePlayersClicked = () => {
		if (currentTournament) {
			navigate(`/selected/${currentTournament.name}/managePlayers`);
		} else {
			console.error("Tournament not selected or not found");
		}
	
	//const onManagePlayersClicked = () => {
		// const index = tournamentInfo.index;
		// const name = tournamentInfo.name;
		// const players = tournamentInfo.players;

		// const TournamentIndexTransfer = {
		// 	type: "INDEX_TO_MANAGE_PLAYERS",
		// 	payload: index,
		// 	name: name,
		// 	players: players,
		// };

	};

	const onCreateMatchClicked = () => {
		const index = tournamentInfo.index;
		const name = tournamentInfo.name;
		const players = tournamentInfo.players;
		const teams = tournamentInfo.teams;
		console.log("tournamentInfo going to CreateMatch: ", tournamentInfo);

		const TournamentIndexTransfer = {
			type: "INDEX_TO_CREATE_MATCH",
			payload: index,
			name: name,
			players: players,
			teams: teams,
		};
		
		navigate(`/selected/${currentTournament.name}/createMatch`, { state: TournamentIndexTransfer }); 
	};

	const onViewScoresClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};

	const onEditMatchClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};

	const onSubmitPlayersClicked = () => {
		const playersToKeep = tournamentInfo.players.filter(
			(player) => player.present !== null
		);
		console.log("Players to keep:", playersToKeep);

		updateTournamentInfo((prevState) => ({
			...prevState,
			players: playersToKeep,
		}));
		handleCloseModal();

	};

	return (
		<TournamentContext.Provider value={{ tournamentInfo, setTournamentInfo: updateTournamentInfo }}>
			<div className="row justify-content-center mx-2">
				<div className="col">
				// {isExactMatch && (
					<Card border="secondary" className="shadow">
						<Card.Header>
							insert logo here
							<Card.Title className="mt-2">{tournamentInfo.name}</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Subtitle className="mb-2 text-muted">
								Edit the tournament with the buttons below.
							</Card.Subtitle>
							<br />
							<div className="col">
								<Button onClick={handleShowModal} variant="warning shadow mt-2">
									Roll Call
								</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={() => onManagePlayersClicked()}>
									Manage Players
								</Button>
							</div>
							<br />
							<div className="col">
								<Button
									onClick={onCreateMatchClicked}
									variant="primary shadow mt-2"
								>
									Create Match
								</Button>
							</div>
							<br />
							<div className="col">
								<Button
									onClick={onViewScoresClicked}
									variant="primary shadow mt-2"
								>
									View Scores
								</Button>
							</div>
							<br />
							<div className="col">
								<Button
									onClick={onEditMatchClicked}
									variant="warning shadow mt-2"
								>
									View/Edit Match
								</Button>
							</div>
							<br />
						</Card.Body>
					</Card>
				)}

					{/* Modal for Roll Call */}
					<Modal show={showModal} onHide={handleCloseModal}>
						<Modal.Header closeButton>
							<Modal.Title>Roll Call</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<RollCall
								playerList={tournamentInfo.players}
								onTogglePresent={togglePlayerPresent}
							/>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="danger" onClick={handleCloseModal}>
								Close
							</Button>
							<Button variant="primary" onClick={onSubmitPlayersClicked}>
								Submit Players
							</Button>
						</Modal.Footer>
					</Modal>
					<Outlet />
				</div>
			</div>
		</TournamentContext.Provider>
	);
}

export default SelectedHome;
