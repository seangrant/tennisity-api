'use strict'

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app');
const server = awsServerlessExpress.createServer(app);

export async function main(event, context) => awsServerlessExpress.proxy(server, event, context);
