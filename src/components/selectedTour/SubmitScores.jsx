import React from "react";
import court from "../../images/VolleyballCourt.jpg";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";

function SubmitScores() {
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
                    <div className="row">
					<Figure className="w-100 ">
						<Figure.Image
							alt="Court"
							src={court}
							fluid
							className="w-100 courtImg"
						/>
						<Figure.Caption className="submitDrops">
							<div className="row container ">
								<div className="col">
                                <Dropdown as={ButtonGroup}>
										<Button variant="outline-dark">Score</Button>
										<Dropdown.Toggle
											split
											variant="secondary"
											id="dropdown-custom-2"
										/>
										<Dropdown.Menu>
											<Dropdown.Item eventKey="1">1</Dropdown.Item>
											<Dropdown.Item eventKey="2">2</Dropdown.Item>
											<Dropdown.Item eventKey="3">3</Dropdown.Item>
											<Dropdown.Item eventKey="4">4</Dropdown.Item>
											<Dropdown.Item eventKey="5">5</Dropdown.Item>
											<Dropdown.Item eventKey="6">6</Dropdown.Item>
											<Dropdown.Item eventKey="7">7</Dropdown.Item>
											<Dropdown.Item eventKey="8">8</Dropdown.Item>
											<Dropdown.Item eventKey="9">9</Dropdown.Item>
                                            <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                            <Dropdown.Item eventKey="11">11</Dropdown.Item>
											<Dropdown.Item eventKey="12">12</Dropdown.Item>
											<Dropdown.Item eventKey="13">13</Dropdown.Item>
											<Dropdown.Item eventKey="14">14</Dropdown.Item>
											<Dropdown.Item eventKey="15">15</Dropdown.Item>
											<Dropdown.Item eventKey="16">16</Dropdown.Item>
											<Dropdown.Item eventKey="17">17</Dropdown.Item>
											<Dropdown.Item eventKey="18">18</Dropdown.Item>
											<Dropdown.Item eventKey="19">19</Dropdown.Item>
                                            <Dropdown.Item eventKey="20">20</Dropdown.Item>
                                            <Dropdown.Item eventKey="21">21</Dropdown.Item>
											<Dropdown.Item eventKey="22">22</Dropdown.Item>
											<Dropdown.Item eventKey="23">23</Dropdown.Item>
											<Dropdown.Item eventKey="24">24</Dropdown.Item>
											<Dropdown.Item eventKey="25">25</Dropdown.Item>
											<Dropdown.Item eventKey="26">26</Dropdown.Item>
											<Dropdown.Item eventKey="27">27</Dropdown.Item>
											<Dropdown.Item eventKey="28">28</Dropdown.Item>
											<Dropdown.Item eventKey="29">29</Dropdown.Item>
                                            <Dropdown.Item eventKey="30">30</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="col offset-2">
                                <Dropdown as={ButtonGroup}>
										<Button variant="outline-dark">Score</Button>
										<Dropdown.Toggle
											split
											variant="secondary"
											id="dropdown-custom-2"
										/>
										<Dropdown.Menu>
											<Dropdown.Item eventKey="1">1</Dropdown.Item>
											<Dropdown.Item eventKey="2">2</Dropdown.Item>
											<Dropdown.Item eventKey="3">3</Dropdown.Item>
											<Dropdown.Item eventKey="4">4</Dropdown.Item>
											<Dropdown.Item eventKey="5">5</Dropdown.Item>
											<Dropdown.Item eventKey="6">6</Dropdown.Item>
											<Dropdown.Item eventKey="7">7</Dropdown.Item>
											<Dropdown.Item eventKey="8">8</Dropdown.Item>
											<Dropdown.Item eventKey="9">9</Dropdown.Item>
                                            <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                            <Dropdown.Item eventKey="11">11</Dropdown.Item>
											<Dropdown.Item eventKey="12">12</Dropdown.Item>
											<Dropdown.Item eventKey="13">13</Dropdown.Item>
											<Dropdown.Item eventKey="14">14</Dropdown.Item>
											<Dropdown.Item eventKey="15">15</Dropdown.Item>
											<Dropdown.Item eventKey="16">16</Dropdown.Item>
											<Dropdown.Item eventKey="17">17</Dropdown.Item>
											<Dropdown.Item eventKey="18">18</Dropdown.Item>
											<Dropdown.Item eventKey="19">19</Dropdown.Item>
                                            <Dropdown.Item eventKey="20">20</Dropdown.Item>
                                            <Dropdown.Item eventKey="21">21</Dropdown.Item>
											<Dropdown.Item eventKey="22">22</Dropdown.Item>
											<Dropdown.Item eventKey="23">23</Dropdown.Item>
											<Dropdown.Item eventKey="24">24</Dropdown.Item>
											<Dropdown.Item eventKey="25">25</Dropdown.Item>
											<Dropdown.Item eventKey="26">26</Dropdown.Item>
											<Dropdown.Item eventKey="27">27</Dropdown.Item>
											<Dropdown.Item eventKey="28">28</Dropdown.Item>
											<Dropdown.Item eventKey="29">29</Dropdown.Item>
                                            <Dropdown.Item eventKey="30">30</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>
						</Figure.Caption>
					</Figure>
                    </div>
					{/* <Image src={court} fluid className="w-100" /> */}
					<br />
					<br />	
                    <div className="row mt-4">
                        <div className="col">
					<Button variant="primary mt-4">Submit</Button>

                        </div>
                        </div>				
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

export default SubmitScores;
