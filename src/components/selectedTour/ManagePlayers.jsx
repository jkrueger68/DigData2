import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import { TournamentContext } from '../TournamentContext';
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
    const [currentTournament, setCurrentTournament] = useState(null);
    const {
        tournamentInfo,
		updateTournamentInfo,
		selectTournament,
		getSelectedTournament
        // Make sure to add any other methods you intend to use from the context here
    } = useContext(TournamentContext);
    const [newPlayer, setNewPlayer] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        skillLevel: "",
		totalPoints: 0,
		gamePlayed: 0,
        average: 0, 
    });
	const [editPlayer, setEditPlayer] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		skillLevel: "",
	});

    const navigate = useNavigate();
    const { state } = useLocation();
    const match = useMatch('/selected/:tournamentName/managePlayers'); 
	const isExactMatch = match?.pathname === location.pathname;

    useEffect(() => {
        const thisTournament  = getSelectedTournament();
        if (state?.type === "INDEX_TO_MANAGE_PLAYERS") {
            selectTournament(state.tourId);
        }
        if (thisTournament) {
            setCurrentTournament(thisTournament);
            setSelectedPlayers(thisTournament.presentPlayers || []);
        }
    }, [getSelectedTournament, setCurrentTournament]);
    
    console.log("currentTournament after ManagePlayers useEffect: ", currentTournament);
    const tournamentName = currentTournament?.name || tournamentInfo?.name || 'Loading tournament...';

    function sortPlayersByNames(players) {
        return players.slice().sort((a, b) => {
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
            return 0;
        });
    }
// Function to handle the Edit button click for a player
    const handleEditPlayer = (player) => {
        setEditPlayerId(player.id); // Set the ID of the player being edited
        setEditPlayer({ // Set the current data of the player in the edit form
            firstName: player.firstName,
            lastName: player.lastName,
            gender: player.gender,
            skillLevel: player.skillLevel,
        });
        setShowEditPlayerModal(true); // Show the modal for editing
    };    

	// Function to handle changes in the form fields within the Edit Player modal
    const handleEditInputChange = (event) => {
        const { name, value } = event.target;
        setEditPlayer(prev => ({ ...prev, [name]: value })); // Update the editPlayer state with new values
    };

	// Function to save the edited player information
    const handleSaveEdit = () => {
      
    
        // Update the players array with the edited player's new information
        const updatedPlayers = playersArr.map(player =>
            player.id === editPlayerId ? { ...player, ...editPlayer } : player
        );
    
        // Update local state
        setPlayersArr(updatedPlayers);
    
        // Update selectedPlayers if the edited player is in that list
        const updatedSelectedPlayers = selectedPlayers.map(player =>
            player.id === editPlayerId ? { ...player, ...editPlayer } : player
        );
    
        setSelectedPlayers(updatedSelectedPlayers);
    
        // Update global state in TournamentContext
        updateTournamentInfo(prevState => {
            const updatedTournamentInfo = { ...prevState };
            updatedTournamentInfo.players = updatedTournamentInfo.players.map(player =>
                player.id === editPlayerId ? { ...player, ...editPlayer } : player
            );
            return updatedTournamentInfo;
        });
    
        setShowEditPlayerModal(false); // Close the modal after saving changes
    };

    console.log("Current SelectedPlayer State: ", selectedPlayers);
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

            console.log("Player added to SelectedPlayer State: ", player);

            return updatedSelectedPlayers;
        });
    };
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPlayer((prevPlayer) => ({
            ...prevPlayer,
            [name]: value,
        }));
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

    const handleBackClick = () => {
        updateTournamentInfo(currentTournament.id, { presentPlayers: selectedPlayers });
        console.log("tournamentInfo after ManagePlayers handleBackClick: ", tournamentInfo);

        const TournamentIndexTransfer = {
            type: "INDEX_TO_SELECTED",
            tourId: currentTournament.id,
        };
    
        navigate(`/selected/${currentTournament.name}`, {
            state: TournamentIndexTransfer,
        });
    };
    
    return (
        <React.Fragment>
                <Card>
                    <Card.Header>
                        <Card.Title className="mt-2">
                            Manage Players for {tournamentName}
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
                                {sortPlayersByNames(selectedPlayers).map((player, index) => (
                                    <tr key={index}>
                                        <td>
                                            {player.firstName} {player.lastName}
                                        </td>
                                        <td>{player.gender}</td>
                                        <td>{player.skillLevel}</td>
                                        <td>{player.average}</td>
                                        <td>
                                         {/* Edit button - when clicked, opens the modal to edit this player */}
                                            <Button
                                                 variant="warning"
                                                 onClick={() => handleEditPlayer(player)} // This function will set the player to be edited and show the modal
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
