const sections = {
  MONDAY_LADIES: {
    id: 1,
    name: 'Monday Ladies',
    category: 'MONDAY_LADIES',
    ranking: 1
  }
};

export const getSection = id => sections[id];

// {
//   teams(group: "MONDAY_LADIES", section: 5){
//     id,
//     name,
//     section{
// 			name
//   	},
//     score(round: 4) {
//       number
//     }
//   },
//   currentRound
// }

// team: { id: 1, name: "Mary's muffins", section: "MONDAY_LADIES", group: 5 }
// team: { id, 2, name: "Jane's Giants", section: "MONDAY_LADIES", group: 5 }
//
//
//
//
//
//
//
// {
//   teams(category: "MONDAY_LADIES", ranking: 5, orderBy: score_DESC){
//     team {
//       id,
//       name,
//       section{
//         category,
//         ranking
//       },
//       score
//     }
//   }
// }

// teamQuery(group section) :TeamType
