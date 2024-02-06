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
    const [currentTournament, setCurrentTournament] = useState(null);
    const {
        tournamentInfo,
		updateTournamentInfo,
		selectTournament,
		getSelectedTournament
        // Make sure to add any other methods you intend to use from the context here
    } = useContext(TournamentContext);

    const navigate = useNavigate();
    const { state } = useLocation();
	const match = useMatch('/selected/:tournamentName');
	const isExactMatch = match?.pathname === location.pathname;

	useEffect(() => {
		console.log("tournamentInfo at start of SelectedHome useEffect: ", tournamentInfo);
        if (state?.type === "INDEX_TO_SELECTED") {
			selectTournament(state.tourId);
			setCurrentTournament(getSelectedTournament);
        }
    }, [state, updateTournamentInfo]);
	
	console.log("currentTournament at end of SelectedHome useEffect: ", currentTournament);

	const togglePlayerPresent = (playerId) => {
		setCurrentTournament(currentTournament => ({
			...currentTournament,
			presentPlayers: currentTournament.presentPlayers.map(player => 
				player.id === playerId ? { ...player, present: player.present === "yes" ? "no" : "yes" } : player
			),
		}));
	};
		
	const sortPlayersByNames = (players) => {
        return players.slice().sort((a, b) => {
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
            return 0;
        });
    }

	const onManagePlayersClicked = () => {
		if (currentTournament) {
			const TournamentIndexTransfer = {
				type: "INDEX_TO_MANAGE_PLAYERS",
				tourId: currentTournament.id,
			};

			navigate(`/selected/${currentTournament.name}/managePlayers`, { state: TournamentIndexTransfer });
		} else {
			console.error("Tournament not selected or not found");
		}
	};

	const onCreateMatchClicked = () => {
		if (currentTournament) {
			const TournamentIndexTransfer = {
				type: "INDEX_TO_CREATE_MATCH",
				tourId: currentTournament.id,
			};

			navigate(`/selected/${currentTournament.name}/createMatch`, { state: TournamentIndexTransfer });
		} else {
			console.error("Tournament not selected or not found");
		}
		
		 
	};

	const onViewScoresClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};

	const onEditMatchClicked = () => {
		navigate("/Friends/New"); // change location when ready
	};

	const onSubmitPlayersClicked = () => {
		const playersToKeep = currentTournament.presentPlayers.filter(
			(player) => player.present !== null
		);
		console.log("Players to keep:", playersToKeep);

		updateTournamentInfo(currentTournament.id, { presentPlayers: playersToKeep });
		setShowModal(false);

	};

	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
						<Card border="secondary" className="shadow">
							<Card.Header>
								insert logo here
								<Card.Title className="mt-2">{currentTournament ? currentTournament.name : 'Tournament Name'}</Card.Title>
							</Card.Header>
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted">
									Edit the tournament with the buttons below.
								</Card.Subtitle>
								<br />
								<div className="col">
									<Button onClick={() => setShowModal(true)} variant="warning shadow mt-2">
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

						{/* Modal for Roll Call with corrected show and onHide properties */}
						<Modal show={showModal} onHide={() => setShowModal(false)}>
							<Modal.Header closeButton>
								<Modal.Title>Roll Call</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<RollCall
									playerList={currentTournament ? sortPlayersByNames(currentTournament.presentPlayers) : []}
									onTogglePresent={togglePlayerPresent}
								/>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="danger" onClick={() => setShowModal(false)}>
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
		</React.Fragment>
	);
}

export default SelectedHome;
