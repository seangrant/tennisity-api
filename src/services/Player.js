import players from './Teamdata/Players';

export const getPlayersForTeam = teamiId => {
  const result = players.filter(player => player.teamiId === teamiId);
  const teamPlayers = [0, 1, 2, 3].map(
    id =>
      result[id] || {
        id,
        teamiId,
        name: `Player ${id + 1}`,
        email: `player${id + 1}@example.org`
      }
  );
  return teamPlayers;
};

export const getAllPlayers = () => players;
