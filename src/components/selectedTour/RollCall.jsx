import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function RollCall({ playerList, onTogglePresent }) {
    function sortPlayersByNames(players) {
        return players.slice().sort((a, b) => {
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
            return 0;
        });
    }

    console.log("sorted players array:", playerList);
    return (
        <React.Fragment>
            <div className="row justify-content-center mx-2">
                <div className="col">
                    <Table responsive="sm" striped>
                        <thead>
                            <tr>
                                <th>Present?</th>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Skill Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortPlayersByNames(playerList).map(player => (
                                <tr key={player.id}>
                                    <td>
                                        <Form.Check 
                                            type="checkbox" 
                                            checked={player.present === "yes"} 
                                            onChange={() => onTogglePresent(player.id)}
                                            aria-label={`Player ${player.id}`}
                                        />
                                    </td>
                                    <td>{player.firstName} {player.lastName}</td>
                                    <td>{player.gender}</td>
                                    <td>{player.skillLevel}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RollCall;