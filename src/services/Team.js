import ladies from './Teamdata/Ladies';

export const getTeams = ({ category, ranking }) =>
  ladies.filter(team => team.category == category && team.ranking == ranking);

export const getTeamById = teamId => ladies.find(team => team.id === teamId);
