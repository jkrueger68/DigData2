import React from "react";
import { Table } from "react-bootstrap";

function DraggablePlayerOverlay({ player }) {
    return (
        <div style={{ border: 'dashed #0d6efd', borderRadius: '5px', backgroundColor: 'white' }}>
        <Table responsive="sm" size="sm" striped bordered hover className="align-middle">
            <tbody>
                <tr>
                    <td>{player.firstName} {player.lastName}</td>
                    <td>{player.gender}</td>
                    <td>{player.skillLevel}</td>
                    <td>{player.average}</td>
                </tr>
            </tbody>
        </Table>
        </div>
    );
}

export default DraggablePlayerOverlay;