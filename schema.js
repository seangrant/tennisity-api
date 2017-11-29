const schema = `
type Tweets {
  name: String!
  screen_name: String!
  location: String!
  description: String!
  followers_count: Int!
  friends_count: Int!
  favourites_count: Int!
  posts : [Tweet]
}

type Tweet {
  tweet : String
}

#returns list of Tweets
type Query {

}`;

// eslint-disable-next-line import/prefer-default-export
export { schema };
