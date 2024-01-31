import React, { createContext, useState } from 'react';

// Create the context with default values
export const TournamentContext = createContext({
    tournamentInfo: [
        {
            name: '',
            index: '',
            players: [],
            teams: [],
            // Add other tournament-related states if needed
        },
    ],
    updateTournamentInfo: () => {}
});

// Create a Provider Component
export const TournamentProvider = ({ children }) => {
    const [tournamentInfo, setTournamentInfo] = useState([
        {
            name: '',
            index: '',
            players: [],
            teams: [],
            // Add other tournament-related states if needed
        },
    ],);

    // Function to update the tournament info
    const updateTournamentInfo = (info) => {
        setTournamentInfo(prevState => ({ ...prevState, ...info }));
    };

    return (
        <TournamentContext.Provider value={{ tournamentInfo, updateTournamentInfo }}>
            {children}
        </TournamentContext.Provider>
    );
};

export default TournamentProvider;
