import sum from 'lodash/sum';

const Matches = [
  {
    category: 'MONDAY_LADIES',
    ranking: 1,
    homeTeamId: 1,
    homeScore: 3,
    awayTeamId: 2,
    awayScore: 3,
    round: 1,
    tournament: 45,
    club: 1
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
