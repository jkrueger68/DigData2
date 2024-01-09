
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function MapTournament({ tournaments, onDeleteTournament, onRenameTournament }) {
	console.log({ onDeleteTournament, onRenameTournament }); // Debugging line

  const [renamingIndex, setRenamingIndex] = useState(null);
  const [newName, setNewName] = useState("");

  return (
    <React.Fragment>
      <Accordion defaultActiveKey="">
        {tournaments.map((tournament, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              {renamingIndex === index ? (
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              ) : (
                <Link to="#">{tournament.name}</Link>
              )}
            </Accordion.Header>
            <Accordion.Body>
              <div className="row align-items-center">
                <div className="col-4">Date Created: {tournament.dateCreated}</div>
                <div className="col-4">
                  {renamingIndex === index ? (
                    <Button 
                      variant="success shadow mt-2"
                      onClick={() => {
                        onRenameTournament(index, newName);
                        setRenamingIndex(null);
                        setNewName("");
                      }}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button 
                      variant="warning shadow mt-2"
                      onClick={() => {
                        setRenamingIndex(index);
                        setNewName(tournament.name);
                      }}
                    >
                      Rename
                    </Button>
                  )}
                </div>
                <div className="col-4">
                  <Button 
                    variant="danger shadow mt-2"
                    onClick={() => onDeleteTournament(index)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </React.Fragment>
  );
}

export default MapTournament;