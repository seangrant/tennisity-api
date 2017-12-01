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

export const getUser = (parent, args) => {
  return new Promise((resolve, reject) => {
    get(args.id, (err, result) => {
      console.log({ err, result });
      if (err) {
        reject(err);
      } else {
        resolve(result.Items[0]);
      }
    });
  });
};
