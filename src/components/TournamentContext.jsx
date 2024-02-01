import React, { createContext, useState } from 'react';

export const TournamentContext = createContext({
    tournamentInfo: [{}],
    updateTournamentInfo: () => {}
});

export const TournamentProvider = ({ children }) => {
    const [tournamentInfo, setTournamentInfo] = useState([{}]);

    const updateTournamentInfo = (newTournament) => {
        setTournamentInfo(prevTournaments => {
            const existingIndex = prevTournaments.findIndex(t => t.id === newTournament.id);
            if (existingIndex > -1) {
                // Update existing tournament
                return prevTournaments.map((tournament, index) => 
                    index === existingIndex ? newTournament : tournament);
            } else {
                // Add new tournament
                return [...prevTournaments, newTournament];
            }
        });
    };

    return (
        <TournamentContext.Provider value={{ tournamentInfo, updateTournamentInfo }}>
            {children}
        </TournamentContext.Provider>
    );
};

export default TournamentProvider;
