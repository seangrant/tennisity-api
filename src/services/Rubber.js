const Rubbers = [
  {
    id: 1,
    homePlayers: [1, 2],
    awayPlayers: [3, 4],
    result: [
      {
        homeScore: 6,
        awayScore: 7
      },
      {
        homeScore: 5,
        awayScore: 7
      }
    ]
  },
  {
    id: 2,
    homePlayers: [1, 5],
    awayPlayers: [3, 7],
    result: [
      {
        homeScore: 1,
        awayScore: 6
      },
      {
        homeScore: 5,
        awayScore: 7
      }
    ]
  }
];

export const getRubbersById = rubbers =>
  Rubbers.filter(rubber => rubbers.indexOf(rubber.id) > -1);
