'use strict';

const calculate = (userTotalSum = 0, userGoodsQuantity = 0, userPromoCode = '') => {
  let totalSum = userTotalSum;
  let goodsQuantity = userGoodsQuantity;
  let promoCode = userPromoCode;
  let discountBase = null;

  console.log(totalSum, goodsQuantity, promoCode);

  if (goodsQuantity > 10) {
    totalSum *= 0.97; // 3% скидка на 10+ товаров
    console.log(`${totalSum} Применилась 3% скидка на 10+ товаров`);
  };
   
  if (totalSum > 30000) {
    discountBase = (totalSum - 30000);
    totalSum = discountBase * 0.85 + 30000; //15% скидка на сумму превышения 30к+
    console.log(`${totalSum} Применилась 15% скидка на сумму [${discountBase}] превышения 30к+`);
  };

  if (promoCode === 'METHED') {
    totalSum *= 0.9; // 10% скидка по промокоду 'METHED'
    console.log(`${totalSum} Применилась 10% скидка по промокоду 'METHED'`);
  };

  if (promoCode ==='G3H2Z1' && totalSum > 2000) {
    totalSum -= 500; // 500р скидка по промокоду 'G3H2Z1' если сумма к этому моменту 2к+
    console.log(`${totalSum} Применилась 500р скидка по промокоду 'G3H2Z1' если сумма к этому моменту 2к+`);
  };
  
  return `Общая сумма: ${totalSum}`;
};

console.log(calculate(2000, 11, 'G3H2Z1'));