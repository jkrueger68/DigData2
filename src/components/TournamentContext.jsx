import React, { createContext, useState } from 'react';

export const TournamentContext = createContext();

export const TournamentProvider = ({ children }) => {
    const [tournamentInfo, setTournamentInfo] = useState([]);
    const [selectedTournamentId, setSelectedTournamentId] = useState(null);

    const addTournament = (tournament) => {
        setTournamentInfo([...tournamentInfo, { ...tournament }]);
    };

    const deleteTournament = (tournamentId) => {
        setTournamentInfo(tournamentInfo.filter(t => t.id !== tournamentId));
        // Clear selection if the deleted tournament was selected
        if (selectedTournamentId === tournamentId) {
            setSelectedTournamentId(null);
        }
    };

    const updateTournamentInfo = (tournamentId, updates) => {
        setTournamentInfo(tournamentInfo.map(t => {
            if (t.id === tournamentId) {
                // Check if the updates include player information and merge it
                if (updates.players) {
                    return { ...t, players: t.players.map(player => {
                            const updatedPlayer = updates.players.find(p => p.id === player.id);
                            return updatedPlayer ? { ...player, ...updatedPlayer } : player;
                        })
                    };
                }
                return { ...t, ...updates };
            }
            return t;
        }));
    };

    const selectTournament = (tournamentId) => {
        setSelectedTournamentId(tournamentId);
    };
    
    const clearSelectedTournament = () => {
        setSelectedTournamentId(null);
    };
    
    // Optionally, get the selected tournament object
    const getSelectedTournament = () => {
        return tournamentInfo.find(t => t.id === selectedTournamentId) || null;
    };

    return (
        <TournamentContext.Provider value={{
            tournamentInfo,
            addTournament,
            deleteTournament,
            updateTournamentInfo,
            selectTournament,
            clearSelectedTournament,
            selectedTournamentId,
            getSelectedTournament
        }}>
            {children}
        </TournamentContext.Provider>
    );

    
};

export default TournamentProvider;

