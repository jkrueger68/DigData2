import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

function ManagePlayers() {
	const [toggle, setToggle] = useState(false);

	const onAddPlayerClick = () => {
		if (toggle) {
			setToggle(false);
		} else {
			setToggle(true);
		}
	};

	return (
		<React.Fragment>
			<Card>
				<Card.Header>
					<Card.Title className="mt-2">Manage Players</Card.Title>
				</Card.Header>
				<Card.Body>
					<Button onClick={onAddPlayerClick} variant="primary" className="mb-3">
						Add Player
					</Button>
					{toggle && (
						<>
							<Card border="secondary" className="my-4">
								<Card.Body>
									<div id="PLAYERNAME" className="row my-3">
										<Stack direction="horizontal" gap={3}>
											<div className="col-3">Player Name</div>
											<div className="vr" />
											<Form>
												<Form.Group>
													<Form.Control as="textarea" rows={1} />
												</Form.Group>
											</Form>
										</Stack>
									</div>
									<div id="GENDER" className="row mb-3">
										<Stack direction="horizontal" gap={3}>
											<div className="col-3">Gender</div>
											<div className="vr" />
											<Form.Check aria-label="option 1" />
											<div className="col-sm-2 ms-2 text-start">Male</div>
											<Form.Check aria-label="option 2" />
											<div className="col ms-2 text-start">Female</div>
										</Stack>
									</div>
									<div id="SKILL" className="row mb-2">
										<Stack direction="horizontal" gap={3}>
											<div className="col-3">Skill</div>
											<div className="vr" />
											<div className="col">
												<div className="row">
													<div className="col d-flex">
														<div className="col-1">
															<Form.Check aria-label="option 1" />
														</div>
														<div className="col ms-2 text-start ps-3">
															Novice
														</div>
													</div>
													<div className="col"></div>
												</div>
												<div className="row">
													<div className="col d-flex">
														<div className="col-1">
															<Form.Check aria-label="option 2" />
														</div>
														<div className="col ms-2 text-start ps-3">
															Intermediate
														</div>
													</div>
													<div className="col"></div>
												</div>
												<div className="row">
													<div className="col d-flex">
														<div className="col-1">
															<Form.Check aria-label="option 3" />
														</div>
														<div className="col ms-2 text-start ps-3">
															Advanced
														</div>
													</div>
													<div className="col"></div>
												</div>
											</div>
										</Stack>
									</div>
									<div className="row">
										<div className="col">
											<Button variant="primary" className="mt-3">
												Submit
											</Button>
										</div>
									</div>
								</Card.Body>
							</Card>
						</>
					)}
					<Table responsive="sm" striped>
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Gender</th>
								<th>Skill Level</th>
								<th>Average PPG</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Jonathon Nolden</td>
								<td>Male</td>
								<td>Da Best</td>
								<td>a Millie</td>
								<td>
									<Button //onClick={editPlayerClick}
										variant="warning"
									>
										Edit
									</Button>
								</td>
							</tr>
							<tr>
								<td>Jason Krueger</td>
								<td>Male</td>
								<td>Good</td>
								<td>13</td>
								<td>
									<Button variant="warning">Edit</Button>
								</td>
							</tr>
							<tr>
								<td>Peter Miron</td>
								<td>Female</td>
								<td>Advanced</td>
								<td>69</td>
								<td>
									<Button variant="warning">Edit</Button>
								</td>
							</tr>
							<tr>
								<td>Jonathon Nolden</td>
								<td>Male</td>
								<td>Da Best</td>
								<td>a Millie</td>
								<td>
									<Button variant="warning">Edit</Button>
								</td>
							</tr>
							<tr>
								<td>Jason Krueger</td>
								<td>Male</td>
								<td>Good</td>
								<td>13</td>
								<td>
									<Button variant="warning">Edit</Button>
								</td>
							</tr>
							<tr>
								<td>Peter Miron</td>
								<td>Female</td>
								<td>Advanced</td>
								<td>69</td>
								<td>
									<Button variant="warning">Edit</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}

export default ManagePlayers;
