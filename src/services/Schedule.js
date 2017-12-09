const schedule = {
  id: 6,
  description: 'schedule for 6 team sections',
  rounds: [
    {
      round: 1,
      pairings: [
        { team1: 1, team2: 2 },
        { team1: 3, team2: 4 },
        { team1: 5, team2: 6 }
      ]
    },
    {
      round: 2,
      pairings: [
        { team1: 1, team2: 3 },
        { team1: 4, team2: 5 },
        { team1: 6, team2: 2 }
      ]
    },
    {
      round: 3,
      pairings: [
        { team1: 1, team2: 4 },
        { team1: 5, team2: 2 },
        { team1: 3, team2: 6 }
      ]
    },
    {
      round: 4,
      pairings: [
        { team1: 1, team2: 5 },
        { team1: 6, team2: 4 },
        { team1: 5, team2: 2 }
      ]
    },
    {
      round: 5,
      pairings: [
        { team1: 1, team2: 6 },
        { team1: 2, team2: 3 },
        { team1: 4, team2: 2 }
      ]
    }
  ]
};
export const getSchedule = ({ category, ranking }) => {
  return {
    ...schedule,
    category,
    ranking
  };
};
// export const resolveRounds({category, ranking}) => {
//     schedule.rounds.map()
// }
