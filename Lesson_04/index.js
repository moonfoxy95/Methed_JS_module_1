'use strict';


{
const productName = "Hot Dog";
const productQuantity = 10;
const productCategory = "Roasted_animals";
const productPrice = 155;
}

{
const productName = "Parmezan";
const productQuantity = 15;
const productCategory = "Cheese";
const productPrice = 10;
}

{
const productName = prompt('Введите наименование товара:');
const productQuantity = Number(prompt('Введите количество товара:'));
const productCategory = prompt('Введите категорию товара:');
const productPrice = Number(prompt('Введите цену товара:'));
let finalMessage = '';

/*
console.log('productName: ', productName, typeof(productName));
console.log('productQuantity: ', productQuantity, typeof(productQuantity));
console.log('productCategory: ', productCategory, typeof(productCategory));
console.log('productPrice: ', productPrice, typeof(productPrice));
*/

if (isNaN(productQuantity) || isNaN(productPrice)) {
  finalMessage = 'Вы ввели некорректные данные';
} else {
  finalMessage = `На складе ${productQuantity} единиц(ы) товара "${productName}" на сумму ${productQuantity * productPrice} золотых.`;
}

console.log(finalMessage);
}