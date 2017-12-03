import CognitoExpress from 'cognito-express';

const cognitoExpress = new CognitoExpress({
  region: 'ap-southeast-2',
  cognitoUserPoolId: 'ap-southeast-2_Jc7SRPmyE',
  tokenUse: 'id', //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
const extractToken = req => {
  return new Promise((resolve, reject) => {
    let accessTokenFromClient = req.headers.accesstoken;

    if (!accessTokenFromClient) {
      reject('Access Token missing from header');
    }

    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
      if (response) {
        resolve(response);
      } else {
        reject(err);
      }
    });
  });
};

export const signupUser = async ({ args: { email, name }, req }) => {
  try {
    const response = await extractToken(req);
    console.log({ id: response['cognito:username'], email, name });
    // console.log({ email, name, response });
  } catch (err) {
    console.log({ err });
  }
};
