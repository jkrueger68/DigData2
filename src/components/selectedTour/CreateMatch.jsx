import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function CreateMatch() {
	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header>
							<Card.Title className="mt-2">Create a Match</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="DROPDOWNS" className="row mt-2">
								<div className="col-2 d-none d-xxl-block empty"></div>
								<div className="col">
									<Dropdown as={ButtonGroup}>
										<Button variant="outline-dark">Team Count</Button>
										<Dropdown.Toggle
											split
											variant="secondary"
											id="dropdown-custom-2"
										/>
										<Dropdown.Menu>
											<Dropdown.Item eventKey="1">2</Dropdown.Item>
											<Dropdown.Item eventKey="2">3</Dropdown.Item>
											<Dropdown.Item eventKey="3">4</Dropdown.Item>
											<Dropdown.Item eventKey="4">5</Dropdown.Item>
											<Dropdown.Item eventKey="5">6</Dropdown.Item>
											<Dropdown.Item eventKey="6">7</Dropdown.Item>
											<Dropdown.Item eventKey="7">8</Dropdown.Item>
											<Dropdown.Item eventKey="8">9</Dropdown.Item>
											<Dropdown.Item eventKey="9">10</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="col">
									<Dropdown as={ButtonGroup}>
										<Button variant="outline-dark">Team Size</Button>
										<Dropdown.Toggle
											split
											variant="secondary"
											id="dropdown-custom-2"
										/>
										<Dropdown.Menu>
											<Dropdown.Item eventKey="1">2</Dropdown.Item>
											<Dropdown.Item eventKey="2">3</Dropdown.Item>
											<Dropdown.Item eventKey="3">4</Dropdown.Item>
											<Dropdown.Item eventKey="4">5</Dropdown.Item>
											<Dropdown.Item eventKey="5">6</Dropdown.Item>
											<Dropdown.Item eventKey="6">7</Dropdown.Item>
											<Dropdown.Item eventKey="7">8</Dropdown.Item>
											<Dropdown.Item eventKey="8">9</Dropdown.Item>
											<Dropdown.Item eventKey="9">10</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="col-2 d-none d-xxl-block empty"></div>
							</div>
							<br />
							<Card id="GAMESETTINGS" border="secondary" className="shadow">
								<Card.Body>
									<Card.Title> Game Setting</Card.Title>
									<Table
										responsive="sm"
										className="table-striped-columns align-middle"
									>
										{/* <table className="table table-striped-columns align-middle"> */}
										<tbody className="table-group-divider">
											<tr>
												<th scope="row d-flex" />
												<td class="fw-bolder">Absent players are given:</td>
												<td>
													<div className="row align-items-center">
														<div className="col-2 flex-fill">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10 flex-fill">
															<strong>No score:</strong> Best for competitive
															tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Lowest team score:</strong>
															<br />
															Best for recreational tournaments
														</div>
													</div>
												</td>
											</tr>
											<tr className="table-group-divider">
												<th scope="row d-flex" />
												<td class="fw-bolder">Distribute players by:</td>
												<td>
													<div className="row align-items-center">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Gender:</strong>
															<br />
															Best for competitive tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Skill:</strong>
															<br />
															Best for recreational tournaments
														</div>
													</div>
													<div className="row align-items-center table-group-divider">
														<div className="col-2">
															<div className="form-check">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue=""
																	id="flexCheckDefault"
																/>
																<label
																	className="form-check-label"
																	htmlFor="flexCheckDefault"
																/>
															</div>
														</div>
														<div className="col-10">
															<strong>Average Points:</strong>
															<br />
															Best for competitive tournaments
														</div>
													</div>
												</td>
											</tr>
										</tbody>
										{/* </table> */}
									</Table>
								</Card.Body>
							</Card>
							<Button variant="primary shadow my-4">Add Player</Button>
							<Card id="PLAYERTABLE" border="secondary" className="shadow">
								<Card.Body>
									<Table responsive="sm" striped>
										<thead>
											<tr>
												<th>Present?</th>
												<th>Full Name</th>
												<th>Gender</th>
												<th>Skill Level</th>
												<th>Average PPG</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Jonathon Nolden</td>
												<td>Male</td>
												<td>Da Best</td>
												<td>a Millie</td>
											</tr>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Jason Krueger</td>
												<td>Male</td>
												<td>Good</td>
												<td>13</td>
											</tr>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Peter Miron</td>
												<td>Female</td>
												<td>Advanced</td>
												<td>69</td>
											</tr>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Jonathon Nolden</td>
												<td>Male</td>
												<td>Da Best</td>
												<td>a Millie</td>
											</tr>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Jason Krueger</td>
												<td>Male</td>
												<td>Good</td>
												<td>13</td>
											</tr>
											<tr>
												<td>
													<Form.Check aria-label="option 1" />
												</td>
												<td>Peter Miron</td>
												<td>Female</td>
												<td>Advanced</td>
												<td>69</td>
											</tr>
										</tbody>
									</Table>
								</Card.Body>
							</Card>
							<div id="GENERATEBUTTON" className="row">
								<div className="col">
									<Button variant="primary shadow my-4">Generate Teams</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default CreateMatch;
