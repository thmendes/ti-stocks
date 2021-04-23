const stocksRepository = require('./stocksRepository')

module.exports = {
  getStocks: getStocks
};

async function getStocks(account){
  try{
    return await stocksRepository.getStocks(account);
  }
  catch(error){
    console.log('stocksService::getStocks::error');
    throw error;
  }
}