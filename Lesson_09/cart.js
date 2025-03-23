'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,


  getTotalPrice() {
    console.log(this.totalPrice);
  },


  add(productName, productPrice, productQuantity = 1) {
    const product = {
      productName,
      productPrice,
      productQuantity
    }
    
    this.items.push(product);
    this.count += 1;
    this.totalPrice += (productPrice * productQuantity);    
  },


  increaceCount(x) {
    this.count += x;   
  },


  calculateItemPrice() {
    this.totalPrice = 0;

    this.items.forEach(element => {
      this.totalPrice += (element.productPrice * element.productQuantity);
    });    
  },


  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;    
  },


  print() {
    const result = JSON.stringify(this.items);

    console.log(result);
    this.getTotalPrice();
  },
};

cart.add('makaroni', 3, 3);
cart.add('pureshka', 11);
cart.add('kotletki', 40);