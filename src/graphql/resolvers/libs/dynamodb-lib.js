import AWS from 'aws-sdk';

AWS.config.update({ region: 'ap-southeast-2' });

export function call() {
  return new AWS.DynamoDB.DocumentClient();
}
