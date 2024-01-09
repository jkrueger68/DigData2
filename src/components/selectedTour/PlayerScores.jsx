import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function PlayerScores() {
  const [gamesArray, setGamesArray] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const newColumns = Array.from(
      { length: gamesArray.length },
      (_, index) => `Column ${index + 1}`
    );
    setGamesArray(newColumns);
  }, [gamesArray.length]);

  const columns = Array.from({ length: gamesArray.length }, (_, index) => (
    <th key={index}># {index + 1}</th>
  ));

  return (
    <React.Fragment>
      <Card id="PLAYERTABLE" border="secondary" className="shadow">
      <Card.Title className="mt-4" >Game Scores</Card.Title>
        <Card.Body>
          <Table responsive="sm" striped>
            <thead>
              <tr>
                <th>Player</th>
                {columns}
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jonathon Nolden</td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>total shit </td>
                {/* Render data for each column */}
              </tr>
              <tr>
                <td>Jason Krueger</td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>total shit </td>
                {/* Render data for each column */}
              </tr>
              <tr>
                <td>Peter Miron</td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>points and shit </td>
                <td>total shit </td>
                {/* Render data for each column */}
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default PlayerScores;



