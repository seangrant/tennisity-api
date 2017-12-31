import players from './Teamdata/Players';

export const getPlayersForTeam = teamiId => {
  const result = players.filter(player => player.teamiId === teamiId);
  const teamPlayers = [1, 2, 3, 4].map(id => {
    const player = result[id - 1];
    return player
      ? { ...player, id }
      : {
          id,
          teamiId,
          name: `Player ${id}`,
          email: `player${id}@example.org`
        };
  });
  return teamPlayers;
};

export const getAllPlayers = () => players;
