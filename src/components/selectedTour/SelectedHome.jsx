import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HomePage() {
	const [tournamentInfo, setTournamentInfo] = useState({
		name: "",
		dateCreated: "",
		index: "",
	});

	const navigate = useNavigate();

	const { state } = useLocation();

	useEffect(() => {
		console.log("Received state:", state);
		if (state?.type === "INDEX_TO_SELECTED") {
			const recievedIndex = state;

			setTournamentInfo((prevState) => {
				const updateTournament = { ...prevState };
				updateTournament.name = recievedIndex.name;
				updateTournament.index = recievedIndex.payload;
			
				console.log("New state to be set:", updateTournament);
				return updateTournament;
			});

		}
	}, [state, tournamentInfo.name]);

	const onAddFriendClicked = () => {
		navigate("/Friends/New");
	};

	const onCreateMatchClicked = () => {
		navigate("/selected/createMatch");
	};

	const onManagePlayersClicked = () => {
		navigate("/managePlayers");
	};
	const onViewScoresClicked = () => {
		navigate("/Friends/New");
	};
	const onEditMatchClicked = () => {
		navigate("/Friends/New");
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
								<Button onClick={onAddFriendClicked}
								variant="warning shadow mt-2">Roll Call</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onCreateMatchClicked} variant="primary shadow mt-2">Create Match</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onManagePlayersClicked} variant="primary shadow mt-2">Manage Players</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onViewScoresClicked} variant="primary shadow mt-2">View Scores</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onEditMatchClicked} variant="warning shadow mt-2">View/Edit Match</Button>
							</div>
                            <br />
						</Card.Body>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
