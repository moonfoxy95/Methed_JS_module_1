'use strict';

console.log('Задание 1')

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

const finalMessage = `На складе ${productQuantity} единиц(ы) товара "${productName}" на сумму ${productQuantity * productPrice} золотых.`

console.log(finalMessage)

//вывод на страницу
document.body.innerHTML = `<p style ="font-size: 40px">${productName}, ${typeof(productName)}</p>
  <p style ="font-size: 40px">${productQuantity}, ${typeof(productQuantity)}</p>
  <p style ="font-size: 40px">${productCategory}, ${typeof(productCategory)}</p>
  <p style ="font-size: 40px">${productPrice}, ${typeof(productPrice)}</p>
  <h1 style="font-size: 40px">${finalMessage}</h1>`
}