'use strict';

const users = [
  { id: '1', name: 'fred', email: 'fred@example.org' },
  { id: '2', name: 'joe', email: 'joe@example.org' }
];
import { get } from './get';
export const getUser = (parent, args) => {
  console.log('^^^^^^^^');
  get(result => {
    console.log({ result });
  });
  return users[0];
};
