import React from "react";
import { useSortable } from "@dnd-kit/sortable";

function DraggablePlayer({ player }) {
    const { attributes, listeners, setNodeRef } = useSortable({ id: player.id });

    return (
        //<tbody>
            <tr ref={setNodeRef} {...attributes} {...listeners}>
                <td className="col-5">{player.firstName} {player.lastName}</td>
                <td className="col-2">{player.gender}</td>
                <td className="col-3">{player.skillLevel}</td>
                <td className="col-2">{player.average}</td>
            </tr>
        //</tbody>
    );
}

export default DraggablePlayer;
