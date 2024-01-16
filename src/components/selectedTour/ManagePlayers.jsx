import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PlayersArray from "../hardCodedData/PlayersArray";

function ManagePlayers() {
	const playersArr = PlayersArray();
	const [showSelectPlayersModal, setShowSelectPlayersModal] = useState(false);
	const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false);
	const [newPlayer, setNewPlayer] = useState({
		name: "",
		gender: "",
		skillLevel: "",
		average: "",
	});
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const [tournamentInfo, setTournamentInfo] = useState({
		name: "",
		index: "",
		players: [],
	});

	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (state?.type === "INDEX_TO_MANAGE_PLAYERS") {
			console.log("State when entering:", state);
			setTournamentInfo((prevState) => ({
				...prevState,
				name: state.name,
				index: state.payload,
				players: state.players,
			}));
			setSelectedPlayers(state.players || []); 
		}
	}, [state]);

	useEffect(() => {
		setTournamentInfo((prevState) => ({
			...prevState,
			players: selectedPlayers,
		}));
		console.log("tournamentInfo players:", tournamentInfo.players);
	}, [selectedPlayers]);

	function sortPlayersByNames(players) {
		return players.slice().sort((a, b) => {
			if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
			if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
			if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
			if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
			return 0;
		});
	}

	const handleBackClick = () => {
		const TournamentIndexTransfer = {
			type: "INDEX_TO_SELECTED",
			payload: tournamentInfo.index,
			name: tournamentInfo.name,
			updatedPlayers: tournamentInfo.players, 
		};
	
		navigate(`/selected/${tournamentInfo.name}`, {
			state: TournamentIndexTransfer,
		});
	};
	

	const handleCreatePlayer = () => {
		// Add logic to add new player to playersArr here
		setShowCreatePlayerModal(false);
	};

	const handleInputChange = (e) => {
		setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
	};

	const handleSelectPlayer = (player) => {
		setSelectedPlayers((prevSelectedPlayers) => {
			let updatedSelectedPlayers;
			if (prevSelectedPlayers.find((p) => p.id === player.id)) {
				updatedSelectedPlayers = prevSelectedPlayers.filter((p) => p.id !== player.id);
			} else {
				updatedSelectedPlayers = [
					...prevSelectedPlayers, 
					{ ...player, present: "yes" } // Add "yes" to the present attribute here
				];
			}
	
			setTournamentInfo((prevState) => ({
				...prevState,
				players: updatedSelectedPlayers,
			}));
	
			return updatedSelectedPlayers;
		});
	};
	

	return (
		<React.Fragment>
			<Card>
				<Card.Header>
					<Card.Title className="mt-2">
						Manage Players for {tournamentInfo.name}
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Button
						variant="primary"
						className="ms-2 mb-3"
						onClick={() => setShowSelectPlayersModal(true)}
					>
						Select Players
					</Button>
					<Button
						variant="warning"
						className="ms-2 mb-3"
						onClick={() => setShowCreatePlayerModal(true)}
					>
						Create Player
					</Button>
					<Button
						variant="secondary"
						className="ms-2 mb-3"
						onClick={handleBackClick}
					>
						Back
					</Button>

					{/* Modal for selecting players */}
					<Modal
						show={showSelectPlayersModal}
						onHide={() => setShowSelectPlayersModal(false)}
					>
						<Modal.Header closeButton>
							<Modal.Title>Select Players</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{sortPlayersByNames(playersArr).map((player) => (
								<Form.Check
									key={player.id}
									type="checkbox"
									label={`${player.firstName} ${player.lastName}`}
									onChange={() => handleSelectPlayer(player)}
									checked={selectedPlayers.some((p) => p.id === player.id)}
								/>
							))}
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="primary"
								onClick={() => setShowSelectPlayersModal(false)}
							>
								Close
							</Button>
						</Modal.Footer>
					</Modal>

					{/* Modal for creating a new player */}
					<Modal
						show={showCreatePlayerModal}
						onHide={() => setShowCreatePlayerModal(false)}
					>
						<Modal.Header closeButton>
							<Modal.Title>Add New Player</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group className="mb-3">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										value={newPlayer.name}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Gender</Form.Label>
									<Form.Control
										type="text"
										name="gender"
										value={newPlayer.gender}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Skill Level</Form.Label>
									<Form.Control
										type="text"
										name="skillLevel"
										value={newPlayer.skillLevel}
										onChange={handleInputChange}
									/>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Average</Form.Label>
									<Form.Control
										type="number"
										name="average"
										value={newPlayer.average}
										onChange={handleInputChange}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="secondary"
								onClick={() => setShowCreatePlayerModal(false)}
							>
								Close
							</Button>
							<Button variant="primary" onClick={handleCreatePlayer}>
								Add Player
							</Button>
						</Modal.Footer>
					</Modal>

					{/* Table to display selected players */}
					<Table striped bordered hover>
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
							{sortPlayersByNames(selectedPlayers).map((player, index) => (
								<tr key={index}>
									<td>
										{player.firstName} {player.lastName}
									</td>
									<td>{player.gender}</td>
									<td>{player.skillLevel}</td>
									<td>{player.average}</td>
									<td>
										<Button variant="warning">Edit</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

export default ManagePlayers;
