import React, { createContext, useState } from 'react';

export const TournamentContext = createContext({
    tournamentInfo: [{}],
    updateTournamentInfo: () => {}
});

export const TournamentProvider = ({ children }) => {
    const [tournamentInfo, setTournamentInfo] = useState([{}]);

    const updateTournamentInfo = (newTournamentOrFunction) => {
        setTournamentInfo(prevTournaments => {
            console.log("Before update:", prevTournaments); // Log the state before update
    
            let updatedTournaments;
            if (typeof newTournamentOrFunction === 'function') {
                // Handle the case where the update logic is passed as a function
                updatedTournaments = newTournamentOrFunction(prevTournaments);
            } else {
                // Handle adding or updating tournaments
                const existingIndex = prevTournaments.findIndex(t => t.id === newTournamentOrFunction.id);
                if (existingIndex > -1) {
                    updatedTournaments = prevTournaments.map((tournament, index) => 
                        index === existingIndex ? newTournamentOrFunction : tournament);
                } else {
                    updatedTournaments = [...prevTournaments, newTournamentOrFunction];
                }
            }
    
            console.log("After update:", updatedTournaments); // Log the state after update
            return updatedTournaments;
        });
    };

    return (
        <TournamentContext.Provider value={{ tournamentInfo, updateTournamentInfo }}>
            {children}
        </TournamentContext.Provider>
    );
};

export default TournamentProvider;
