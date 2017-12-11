import clubs from './Teamdata/Clubs';

export const getClubById = id => clubs.find(club => club.id === id);
export const getAllClubs = ({ limit, startsWith }) =>
  clubs.filter(club => club.name.startsWith(startsWith)).slice(0, limit);
