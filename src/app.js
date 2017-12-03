import express from 'express';
import body_parser from 'body-parser';
import CognitoExpress from 'cognito-express';

import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

const cognitoExpress = new CognitoExpress({
  region: 'ap-southeast-2',
  cognitoUserPoolId: 'ap-southeast-2_Jc7SRPmyE',
  tokenUse: 'access', //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

const app = express();

app.use(body_parser.json({ limit: '50mb' }));

const graphqlRoute = expressGraphQL(() => {
  return {
    graphiql: true,
    schema
  };
});

// //Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
// graphqlRoute.use(function(req, res, next) {
//   //I'm passing in the access token in header under key accessToken
//   let accessTokenFromClient = req.headers.accesstoken;
//
//   //Fail if token not present in header.
//   if (!accessTokenFromClient)
//     return res.status(401).send('Access Token missing from header');
//
//   cognitoExpress.validate(accessTokenFromClient, function(err, response) {
//     //If API is not authenticated, Return 401 with error message.
//     if (err) return res.status(401).send(err);
//
//     //Else API has been authenticated. Proceed.
//     res.locals.user = response;
//     console.log({ response });
//     next();
//   });
// });

app.use('/', graphqlRoute);

module.exports = app;
