import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import MapTournament from "./MapTournament";
import { TournamentContext } from '../TournamentContext';


function HomePage() {
	const [showModal, setShowModal] = useState(false);
	const { tournamentInfo, updateTournamentInfo } = useContext(TournamentContext);
	const [newTournamentName, setNewTournamentName] = useState("");
	const [tournaments, setTournaments] = useState([]);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const navigate = useNavigate();

	const handleCreateTournament = () => {
        const newTournament = {
			id: Date.now(),
			name: newTournamentName,
			dateCreated: new Date().toLocaleDateString(),
		};
		updateTournamentInfo(newTournament); // Pass the object directly
		setNewTournamentName("");
		handleCloseModal();
    };
	

	const handleDeleteTournament = (idToDelete) => {
		updateTournamentInfo(prevTournaments => {
			const updatedTournaments = { ...prevTournaments };
			delete updatedTournaments[idToDelete];
			return updatedTournaments;
		});
	};

	const handleRenameTournament = (idToRename, newName) => {
		updateTournamentInfo(prevTournaments => ({
			...prevTournaments,
			[idToRename]: {
				...prevTournaments[idToRename],
				name: newName
			}
		}));
	};

	const handleStartTournament = (index, tournament) => {
		console.log("handleStartTournament: ", tournament);
		navigate(`/selected/${tournament.name}`, { 
			state: {
				type: "INDEX_TO_SELECTED",
				id: index,
				tourId: tournament.id,
				name: tournament.name,
				dateCreated: tournament.dateCreated
			}
		});
	};


	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header>
							insert logo here
							<Card.Title className="mt-2">Create a Tournament</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Text>
								To create a new tournament, click on the "Create Tournament"
								button.
								<br />
								Or, select a previous tournament below the button.
							</Card.Text>
							<Button variant="primary mt-2" onClick={handleShowModal}>
								Create Tournament
							</Button>
							<br />
							<br />
							<MapTournament
								tournaments={Object.values(tournamentInfo)}
								onDeleteTournament={handleDeleteTournament}
								onRenameTournament={handleRenameTournament}
								onStartTournament={handleStartTournament}
							/>
						</Card.Body>
					</Card>
				</div>
			</div>

			{/* Modal to create a new tournament */}
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Create New Tournament</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="newTournamentName">
							<Form.Label>Tournament Name:</Form.Label>
							<Form.Control
								type="text"
								value={newTournamentName}
								onChange={(e) => setNewTournamentName(e.target.value)}
								placeholder="Enter tournament name"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
					<Button variant="primary" onClick={handleCreateTournament}>
						Save Tournament
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
}

export default HomePage;
