import React from "react";
import court from "../../images/VolleyballCourt.jpg";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";

function GenerateTeam() {
	return (
		<React.Fragment>
			<Card>
				<Card.Body id="COURTLAYOUT">
					<div className="row">
						<div className="col">
							<Card.Title>Team #1</Card.Title>
						</div>
						<div className="col">
							<Card.Title>Team #2</Card.Title>
						</div>
					</div>
					<Figure className="w-100">
						<Figure.Image
							alt="Court"
							src={court}
							fluid
							className="w-100 courtImg"
						/>
						<Figure.Caption className="courtText">
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="row justify-content-center fw-bolder text-white">
											Jonathon Nolden
										</div>
										<div className="row justify-content-center">
											Alex Cuevas
										</div>
										<div className="row justify-content-center">
											Lena Nolden
										</div>
										<div className="row justify-content-center fw-bolder text-white">Bob Barker</div>
										<div className="row justify-content-center">Player #5</div>
										<div className="row justify-content-center">Player #6</div>
									</div>
									<div className="col offset-2">
										<div className="row justify-content-center">
											Jason Krueger
										</div>
										<div className="row justify-content-center">
											Peter Miron
										</div>
										<div className="row justify-content-center">
											Cynthia Alvarado
										</div>
										<div className="row justify-content-center">Player #4</div>
										<div className="row justify-content-center">Player #5</div>
										<div className="row justify-content-center">Player #6</div>
									</div>
								</div>
							</div>
						</Figure.Caption>
					</Figure>
					{/* <Image src={court} fluid className="w-100" /> */}
					<br />
					<br />
					<div id="PLAYERDROPDOWNS" className="row mt-4">
						<div className="col-2 d-none d-xxl-block empty"></div>
						<div className="col">
							<Dropdown as={ButtonGroup}>
								<Button variant="outline-dark">Add player</Button>
								<Dropdown.Toggle
									split
									variant="secondary"
									id="dropdown-custom-2"
								/>
								<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Peter Miron</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="col">
							<Dropdown as={ButtonGroup}>
								<Button variant="outline-dark">Remove player</Button>
								<Dropdown.Toggle
									split
									variant="secondary"
									id="dropdown-custom-2"
								/>
								<Dropdown.Menu>
									<Dropdown.Item eventKey="1">Jonathon Nolden</Dropdown.Item>
									<Dropdown.Item eventKey="2">Jason Krueger</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="col-2 d-none d-xxl-block empty"></div>
					</div>
					<Button variant="primary mt-4">Submit Scores</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

export default GenerateTeam;
