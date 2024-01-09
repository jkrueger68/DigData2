import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	return (
		<React.Fragment>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light"
				className="shadow"
			>
				<Container>
					<Navbar.Brand href="#home">DigData</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Create Tournament</Nav.Link>
							<Nav.Link href="#pricing">Players</Nav.Link>
							<Nav.Link href="/selected">Selected</Nav.Link>
							<Nav.Link href="/selected/createMatch">Create Match</Nav.Link>
							<Nav.Link href="/selected/generate">Generate Match</Nav.Link>
							<Nav.Link href="/submitScores">Submit Scores</Nav.Link>
							<Nav.Link href="/managePlayers">Manage Players</Nav.Link>
							<Nav.Link href="/playerScores">Player Scores</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default NavBar;

/*
players
scores/games
*/
