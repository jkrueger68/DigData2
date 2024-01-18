import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import initialPlayersArray from "../hardCodedData/PlayersArray";

function ManagePlayers() {
    const [playersArr, setPlayersArr] = useState(initialPlayersArray);
    const [showSelectPlayersModal, setShowSelectPlayersModal] = useState(false);
    const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false);
	const [showEditPlayerModal, setShowEditPlayerModal] = useState(false);
	const [editPlayerId, setEditPlayerId] = useState(null);
	const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        skillLevel: "",
		totalPoints: 0,
		gamePlayed: 0,
        average: 0, 
    });
    const [tournamentInfo, setTournamentInfo] = useState({
        name: "",
        index: "",
        players: [],
    });
	const [editPlayer, setEditPlayer] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		skillLevel: "",
	});

    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (state?.type === "INDEX_TO_MANAGE_PLAYERS") {
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
    }, [selectedPlayers, newPlayer]);

    function sortPlayersByNames(players) {
        return players.slice().sort((a, b) => {
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
            return 0;
        });
    }

	const handleEditInputChange = (e) => {
		const { name, value } = e.target;
        setEditPlayer((prevPlayer) => ({
            ...prevPlayer,
            [name]: value,
        }));
	};
	const handleEditPlayer = (player) => {
		setEditPlayerId(player.id);
		setEditPlayer({
			firstName: player.firstName,
			lastName: player.lastName,
			gender: player.gender,
			skillLevel: player.skillLevel,
		});
		setShowEditPlayerModal(true);
	};

	const handleSaveEdit = () => {
		const updatedSelectedPlayers = selectedPlayers.map(person => {
            if (person.id === editPlayerId) {
                return { ...person, ...editPlayer };
            }
            return person;
        });

		const updatedPlayersArray = playersArr.map(person => {
            if (person.id === editPlayerId) {
                return { ...person, ...editPlayer };
            }
            return person;
        });

        setSelectedPlayers(updatedSelectedPlayers);
		setPlayersArr(updatedPlayersArray);
        setShowEditPlayerModal(false);
	};

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
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPlayer((prevPlayer) => ({
            ...prevPlayer,
            [name]: value,
        }));
    };

    const handleSelectPlayer = (player) => {
        setSelectedPlayers((prevSelectedPlayers) => {
            let updatedSelectedPlayers;
            if (prevSelectedPlayers.find((p) => p.id === player.id)) {
                updatedSelectedPlayers = prevSelectedPlayers.filter((p) => p.id !== player.id);
            } else {
                updatedSelectedPlayers = [
                    ...prevSelectedPlayers, 
                    { ...player, present: "yes" }
                ];
            }
    
            setTournamentInfo((prevState) => ({
                ...prevState,
                players: updatedSelectedPlayers,
            }));
    
            return updatedSelectedPlayers;
        });
    };

    const handleCreatePlayer = () => {
        setPlayersArr([...playersArr, { ...newPlayer, id: playersArr.length + 1, average: 0 }]);
        setNewPlayer({
            firstName: "",
            lastName: "",
            gender: "",
            skillLevel: "",
			totalPoints: 0,
			gamePlayed: 0,
            average: 0, 
        });
        setShowCreatePlayerModal(false);
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
							{/*add a search bar here*/}
                        </Modal.Header>
						<Modal.Header>
                            <Modal.Title>Search Players:</Modal.Title>
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
                            <Modal.Title>Create Player</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                {/* First Name */}
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={newPlayer.firstName}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
        
                                {/* Last Name */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={newPlayer.lastName}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
        
                                {/* Gender Dropdown */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        name="gender"
                                        value={newPlayer.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
        
                                {/* Skill Level Dropdown */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Skill Level</Form.Label>
                                    <Form.Select
                                        name="skillLevel"
                                        value={newPlayer.skillLevel}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Skill Level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </Form.Select>
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

					{/* Modal for editing a player */}									
					<Modal
						show={showEditPlayerModal}
						onHide={() => setShowEditPlayerModal(false)}
					>
						<Modal.Header closeButton>
							<Modal.Title>Edit Player</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
							<Form>
							{/* ... other form groups ... */}
							<Form.Group className="mb-3">
								<Form.Label>First Name:</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									value={editPlayer.firstName}
									onChange={handleEditInputChange}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Last Name:</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									value={editPlayer.lastName}
									onChange={handleEditInputChange}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        name="gender"
                                        value={editPlayer.gender}
                                        onChange={handleEditInputChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
								<Form.Group className="mb-3">
                                    <Form.Label>Skill Level</Form.Label>
                                    <Form.Select
                                        name="skillLevel"
                                        value={editPlayer.skillLevel}
                                        onChange={handleEditInputChange}
                                    >
                                        <option value="">Select Skill Level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </Form.Select>
                                </Form.Group>
						</Form>
							</Form>
						</Modal.Body>
						<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => setShowEditPlayerModal(false)}
						>
							Close
						</Button>
						<Button variant="primary" onClick={handleSaveEdit}>
							Save Changes
						</Button>
					</Modal.Footer>
					</Modal>

                    {/* Table to display selected players */}
                    <Table 
						responsive
						striped 
						bordered 
						hover
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
                            {sortPlayersByNames(selectedPlayers).map((player, index) => (
                                <tr key={index}>
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
											Edit
										</Button>
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
