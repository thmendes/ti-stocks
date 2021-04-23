const errorUtil = require('./errorUtil');
const stocksService = require('./stocksService')

module.exports = {
  getStocks: getStocks
};

async function getStocks(req, res){
  try{
    console.time('getStocks');
    console.log('stocksController::getStocks');
    const response = await stocksService.getStocks();
    res.json(response);
  }
  catch(error){
    console.log('stocksController::getStocks::error', error);
    const errorResponse = errorUtil.errorResponse(error.name, error.message, error.errors);
    res.status(errorResponse.statusCode).send(errorResponse.body);
  }
  finally{
    console.timeEnd('getStocks');
  }
}
