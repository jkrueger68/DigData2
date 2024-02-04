import React, { createContext, useState } from 'react';

export const TournamentContext = createContext({
    tournamentInfo: [],
    updateTournamentInfo: () => {}
});

export const TournamentProvider = ({ children }) => {
    const [tournamentInfo, setTournamentInfo] = useState([]);

    const updateTournamentInfo = (newTournamentOrFunction) => {
        setTournamentInfo(prevTournaments => {
            console.log("Before update:", prevTournaments); // Log the state before update
            
            if (!Array.isArray(prevTournaments)) {
                console.warn('prevTournaments is expected to be an array but received:', typeof prevTournaments);
                // Reset to initial state or handle error as appropriate
                return [];
            }

            if (typeof newTournamentOrFunction === 'function') {
                return newTournamentOrFunction(prevTournaments);
            }
            
            // If it's an object, we're adding or updating a tournament
            const existingIndex = prevTournaments.findIndex(t => t.id === newTournamentOrFunction.id);
            if (existingIndex > -1) {
                // Update existing tournament
                return prevTournaments.map((t, idx) => idx === existingIndex ? { ...t, ...newTournamentOrFunction } : t);
            } else {
                // Add new tournament
                return [...prevTournaments, newTournamentOrFunction];
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
