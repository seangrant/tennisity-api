import clubs from './Teamdata/Clubs';

export const getClubById = id => clubs.find(club => club.id === id);
