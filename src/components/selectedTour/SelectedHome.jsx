import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HomePage() {
	const navigate = useNavigate();

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
							<Card.Title className="mt-2">Selected Tournament</Card.Title>
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
