import Alpha from 'alphavantage';

const alphaClient = Alpha({ key: '3HK0H0ZP5XCFAJL4' });

export default {
  fetchThoseGoodStocksThatWillMakeMeLotsOfMoney() {
    return new Promise((resolve, reject) => {
      const thisListOfGoodStocks = [
        'tqqq',
        'msft',
        'aapl',
      ];
      alphaClient.data.batch(thisListOfGoodStocks).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
