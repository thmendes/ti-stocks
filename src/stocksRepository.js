const errorUtils  = require('./errorUtil');
const AWS = require('aws-sdk');

const stocksTable = process.env.STOCKS_TABLE;
const DYNAMODB_CLIENT = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "us-east-1"
});

module.exports = {
  getStocks: getStocks
};

async function getStocks(account){
  try{
    console.log('stocksRepository::getStocks', account);
    const params = {
      TableName: stocksTable
    };
    return await DYNAMODB_CLIENT.scan(params).promise()
  }
  catch(error){
    console.log('stocksRepository::getStocks::error', error);
    throw { name : "Internal", message : errorUtils.knownErrors.INTERNAL, errors: []};
  }
}