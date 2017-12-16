import players from './Teamdata/Players';

export const getPlayersForTeam = id =>
  players.filter(player => player.id === id);

export const getAllPlayers = () => players;
