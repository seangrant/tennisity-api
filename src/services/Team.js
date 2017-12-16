import ladies from './Teamdata/Ladies';
import mens from './Teamdata/Mens';
import mixed from './Teamdata/Mixed';
import openSingles from './Teamdata/OpenSingles';

const teams = [ladies, mens, mixed, openSingles];

export const getTeams = ({ category, ranking }) => {
  const team = teams[0] || [];

  return team.filter(
    team => team.category == category && team.ranking == ranking
  );
};

export const getTeamById = teamId => ladies.find(team => team.id === teamId);

export const getTeamsByCategory = category =>
  ladies.filter(team => team.category === category);
