const teams = [
  {
    id: 1,
    category: 'MONDAY_LADIES',
    ranking: 1,
    scheduleNumber: 1,
    name: 'Marias Martians'
  },
  {
    id: 2,
    category: 'MONDAY_LADIES',
    ranking: 1,
    scheduleNumber: 2,
    name: 'Bettys Bullets'
  },
  {
    id: 3,
    category: 'MONDAY_LADIES',
    ranking: 1,
    scheduleNumber: 3,
    name: 'Lucys Lions'
  },
  {
    id: 4,
    category: 'MONDAY_LADIES',
    ranking: 1,
    scheduleNumber: 4,
    name: 'Daras Dragons'
  },
  {
    id: 5,
    category: 'MONDAY_LADIES',
    ranking: 2,
    scheduleNumber: 1,
    name: 'Stephs Stars'
  },
  {
    id: 6,
    category: 'MONDAY_LADIES',
    ranking: 2,
    scheduleNumber: 2,
    name: 'Georinas Giants'
  },
  {
    id: 7,
    category: 'MONDAY_LADIES',
    ranking: 2,
    scheduleNumber: 3,
    name: 'Marthas Maniacs'
  },
  {
    id: 8,
    category: 'MONDAY_LADIES',
    ranking: 2,
    scheduleNumber: 4,
    name: 'Janes Javlins'
  }
];

export const getTeams = ({ category, ranking }) =>
  teams.filter(team => team.category == category && team.ranking == ranking);
