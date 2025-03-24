'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,


  add(productName, productPrice, productQuantity = 1) {
    const product = {
      productName,
      productPrice,
      productQuantity
    };
    
    this.items.push(product);
    this.count += 1;
    this.totalPrice += (productPrice * productQuantity);    
  },

  increaceCount(x) {
    this.count += x;   
  },

  calculateItemPrice() {   
    const calculate = this.items.reduce((acc, item) => {
      return acc + (item.productPrice * item.productQuantity);
    }, 0);

    return calculate;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;    
  },

  print() {
    const result = JSON.stringify(this.items);

    console.log(result);
    return this.getTotalPrice();    
  },
};


Object.defineProperty(cart, 'overallPrice', {
  get() {
    return this.calculateItemPrice();
  },
});


cart.add('makaroni', 3, 3);
cart.add('pureshka', 11);
cart.add('kotletki', 40);