import ladies from './Teamdata/Ladies';
import mens from './Teamdata/Mens';
const teams = [ladies, mens];
export const getTeams = ({ category, ranking }) => {
  const team = teams[category - 1] || [];
  return team.filter(
    team => team.category == category && team.ranking == ranking
  );
};

export const getTeamById = teamId => ladies.find(team => team.id === teamId);

export const getTeamsByCategory = category =>
  ladies.filter(team => team.category === category);
