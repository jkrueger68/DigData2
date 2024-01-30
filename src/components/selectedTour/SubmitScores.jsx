import React, { useState } from 'react';
import { Accordion, Card, Button, FormControl, Alert } from 'react-bootstrap';

function TournamentMatches({ teams }) {
  // State to hold the scores and validation errors for each team
  const [teamScores, setTeamScores] = useState({});
  const [errors, setErrors] = useState({});

  // Function to validate and set the team scores
  const handleScoreChange = (teamIndex, score) => {
    const scoreNum = parseInt(score, 10);
    if (isNaN(scoreNum)) {
      setErrors({ ...errors, [teamIndex]: "Please enter a number." });
    } else if (scoreNum < 0 || scoreNum > 99) {
      setErrors({ ...errors, [teamIndex]: "Score must be between 0 and 99." });
    } else {
      setTeamScores({ ...teamScores, [teamIndex]: scoreNum });
      setErrors({ ...errors, [teamIndex]: "" });
    }
  };

  // Function to add the submitted score to each player in the team
  const addScoreToPlayers = (teamIndex) => {
    const scoreToAdd = teamScores[teamIndex];
    if (scoreToAdd !== undefined && !errors[teamIndex]) {
      // Assuming each team object has a players array
      teams[teamIndex].players.forEach(player => {
        if (!player.scores) {
          player.scores = [];
        }
        player.scores.push(scoreToAdd);
      });
      console.log(`Scores for Team ${teamIndex + 1} updated:`, teams[teamIndex].players);
      // Here you can set up logic to store the updated teams in localStorage or another persistent storage if needed
    } else {
      console.error("Score is invalid or not entered.");
    }
  };

  return (
    <div>
      <h2>Tournament Name and Game Number</h2>
      {teams.map((team, index) => (
        <Accordion key={team.id} defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Team #{team.id}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {/* Score input for the team */}
                <FormControl
                  type="text"
                  placeholder="Enter Score"
                  aria-label={`Team ${team.id} Score`}
                  value={teamScores[index] || ''}
                  onChange={(e) => handleScoreChange(index, e.target.value)}
                />
                {/* Error message for the team */}
                {errors[index] && (
                  <Alert variant="danger">{errors[index]}</Alert>
                )}
                {/* List of players in the team */}
                {team.players.map(player => (
                  <div key={player.id}>{player.name}</div>
                ))}
              </Card.Body>
              <Card.Footer>
                {/* Submit button for the team */}
                <Button variant="primary" onClick={() => addScoreToPlayers(index)}>
                  Submit Score
                </Button>
              </Card.Footer>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </div>
  );
}

export default TournamentMatches;
