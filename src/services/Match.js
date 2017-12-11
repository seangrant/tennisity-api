import sum from 'lodash/sum';

const Matches = [
  {
    id: 1,
    category: 'MONDAY_LADIES',
    ranking: 1,
    homeTeamId: 1,
    homeScore: 3,
    awayTeamId: 2,
    awayScore: 3,
    round: 1,
    tournament: 45,
    club: 1,
    rubbers: [1, 2, 3]
  },
  {
    id: 2,
    category: 'MONDAY_LADIES',
    ranking: 1,
    homeTeamId: 3,
    homeScore: 3,
    awayTeamId: 4,
    awayScore: 3,
    round: 1,
    tournament: 45,
    club: 2,
    rubbers: [1, 2, 3]
  },
  {
    id: 3,
    category: 'MONDAY_LADIES',
    ranking: 1,
    homeTeamId: 5,
    homeScore: 3,
    awayTeamId: 6,
    awayScore: 3,
    round: 1,
    tournament: 45,
    club: 3,
    rubbers: [1, 2, 3]
  }
];

export const getMatchesForTeam = teamId =>
  Matches.filter(
    match => match.homeTeamId == teamId || match.awayTeamId == teamId
  );

export const getScoreForTeam = teamId =>
  sum(
    getMatchesForTeam(teamId).map(
      match => (match.homeTeamId == teamId ? match.homeScore : match.awayScore)
    )
  );

export const getMatchById = matchId =>
  Matches.find(match => match.id == matchId);
