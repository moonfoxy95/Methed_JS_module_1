'use strict';

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
]; // количество товаров, общая сумма

const getAveragePriceGoods = (arrOriginal) => {
  const arr = arrOriginal.slice();
  let sumQuantity = null;
  let avgCheckPrices = [];

  for (let line = 0; line < arr.length; line++) { // средняя стоимость товара в чеке
    sumQuantity += arr[line][0];
    let lineAvg = Math.round(arr[line][1] / arr[line][0]);
    avgCheckPrices.push(lineAvg);
  };

  let avgCheckPricesSum = 0;
  for (let i = 0; i < avgCheckPrices.length; i++) { // сумма всех усредненных чеков
    avgCheckPricesSum += avgCheckPrices[i];
  };

  const averagePriceGoods = Math.round(avgCheckPricesSum / sumQuantity);
  
  console.log(`Средняя цена товара в магазине: ${averagePriceGoods}`)
};

getAveragePriceGoods(allСashbox);

