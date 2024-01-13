import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RollCall from "./RollCall";
import PlayersArray from "../hardCodedData/PlayersArray";

function SelectedHome() {
	const playersArr = PlayersArray();
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	const [tournamentInfo, setTournamentInfo] = useState({
		name: "",
		index: "",
		players: [],
	});
	const [manageList, setManageList] = useState({
		playersInTour: [],
	});

	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (state?.type === "INDEX_TO_SELECTED") {
			setTournamentInfo((prevState) => ({
				...prevState,
				name: state.name,
				index: state.payload,
			}));
		}
	}, [state]);

	useEffect(() => {
		const playerOrder = playersArr.sort((a, b) => {
			if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
			if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
			// If last names are equal, sort by first name
			if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
			if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
			return 0;
		});

		setTournamentInfo((prevState) => ({
			...prevState,
			players: playerOrder,
		}));

		console.log("Updated manageList:", manageList);
	}, [manageList]);

	const togglePlayerPresent = (id) => { 
		setTournamentInfo((prevState) => {
			const updatedPlayers = prevState.players.map((player) =>
				player.id === id
					? { ...player, present: player.present === "yes" ? "no" : "yes" }
					: player
			);
			console.log("New players state to be set:", updatedPlayers);
			return { ...prevState, players: updatedPlayers };
		});
	};

	const onCreateMatchClicked = () => {
		navigate("/selected/createMatch");
	};
	const onManagePlayersClicked = () => {
		navigate("/managePlayers");
	};
	const onViewScoresClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};
	const onEditMatchClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};
	const onSubmitPlayersClicked = () => {
		const playersWithYes = tournamentInfo.players.filter(
			(player) => player.present === "yes"
		);
		console.log("Players with yes:", playersWithYes);

		setManageList(prevState => ({
			...prevState,
			playersInTour: playersWithYes
		}));
		handleCloseModal();
	};

	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
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
									onClick={onManagePlayersClicked}
									variant="primary shadow mt-2"
								>
									Manage Players
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
				</div>
			</div>
		</React.Fragment>
	);
}

export default SelectedHome;
