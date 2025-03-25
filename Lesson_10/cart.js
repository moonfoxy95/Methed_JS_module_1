'use strict';

const cart = {
  items: [],
  count: 0,


  add(productName, productPrice, productQuantity = 1) {
    const product = {
      productName,
      productPrice,
      productQuantity,
    };

    this.items.push(product);
    this.count += 1;
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
    this.count = 0;
  },

  print() {
    const result = JSON.stringify(this.items);

    console.log(result);
    console.log(this.totalPrice);
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
},


// cart.add('makaroshki', 3, 3);
// cart.add('pureshka', 11);
// cart.add('kotletki', 40);
// cart.add('pelmeshki', 12, 5);