import { addUser } from './graphql/services/User';

export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
}

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'users',
    Item: {
      id: event.requestContext.identity.cognitoIdentityId,
      content: event.requestContext.identity,
      createdAt: new Date().getTime()
    }
  };

  try {
    await addUser(params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log({ e });
    callback(null, failure({ status: false }));
  }
}
