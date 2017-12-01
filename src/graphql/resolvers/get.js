import AWS from 'aws-sdk';

AWS.config.update({ region: 'ap-southeast-2' });

const dynamo = new AWS.DynamoDB.DocumentClient();

export const get = callback => {
  var params = {
    TableName: 'Users',
    KeyConditionExpression: '#email = :email',
    ExpressionAttributeNames: {
      '#email': 'email'
    },
    ExpressionAttributeValues: {
      ':email': 'fred@example.org'
    }
  };

  dynamo.query(params, callback);
};
