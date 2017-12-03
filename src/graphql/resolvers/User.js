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
export const getUser = (parent, args) => {
  return new Promise((resolve, reject) => {
    get(args.id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.Items[0]);
      }
    });
  });
};

export const createUser = ({ id, name, email }) => {
  return new Promise((resolve, reject) => {
    create({ id, name, email }, (err, result) => {
      console.log({ err, result });
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
