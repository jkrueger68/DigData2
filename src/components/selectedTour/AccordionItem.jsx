import React from 'react';
import { Accordion, Table } from "react-bootstrap";
import { useDroppable } from '@dnd-kit/core';
import DraggablePlayer from "./DraggablePlayers";

function AccordionItem({ team, teamIndex, isOver, style }) {
    const { setNodeRef } = useDroppable({ id: `team-${teamIndex}` });

    const accordionStyle = isOver ? { ...style, width: '100%' } : { width: '100%' };

    return (
        <div ref={setNodeRef} style={accordionStyle}>
            <Accordion.Item eventKey={teamIndex.toString()}>
                <Accordion.Header>Team {teamIndex + 1}</Accordion.Header>
                <Accordion.Body>
                    <Table responsive="sm" size="sm" striped bordered hover className="align-middle">
                        {/* ... No Table Header Content ... */}
                        {team.map(player => (
                            <DraggablePlayer key={player.id} player={player} />
                        ))}
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}

export default AccordionItem;
