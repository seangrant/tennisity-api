import CognitoExpress from 'cognito-express';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'ap-southeast-2' });

const dynamo = new AWS.DynamoDB.DocumentClient();

const get = (id, callback) => {
  var params = {
    TableName: 'users',
    KeyConditionExpression: 'id = :a',
    ExpressionAttributeValues: {
      ':a': id
    }
  };

  dynamo.query(params, callback);
};

const create = ({ id, name, email }, callback) => {
  const params = {
    TableName: 'users',
    Item: {
      id,
      name,
      email,
      createdAt: new Date().getTime()
    }
  };
  dynamo.put(params, callback);
};

export const createUser = ({ id, name, email }) => {
  return new Promise((resolve, reject) => {
    create({ id, name, email }, (err, result) => {
      console.log({ err, result });
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

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
    const params = { id: response['cognito:username'], email, name };

    const result = await createUser(params);
    return true;
  } catch (err) {
    console.log({ err });
    return false;
  }
};

export const getUser = id => {
  return new Promise((resolve, reject) => {
    get(id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.Items[0]);
      }
    });
  });
};

export const currentUser = async req => {
  try {
    const response = await extractToken(req);
    const user = getUser(response['cognito:username']);
    return user;
  } catch (err) {
    console.log({ err });
    return false;
  }
};
