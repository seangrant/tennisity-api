'use strict';

const users = [
  { id: '1', name: 'fred', email: 'fred@example.org' },
  { id: '2', name: 'joe', email: 'joe@example.org' }
];

export const getUser = (parent, args) => {
  return users[0];
};
