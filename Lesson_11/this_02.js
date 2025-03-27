'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  promocodes: {
    METHED: 15,
    NEWYEAR: 21,
  },

  set setDiscount(promocode) {
    for (const [key, value] of Object.entries(this.promocodes)) {
      if (key === promocode) {
        this.discount = value;
        console.log('Применена скидка ' + value + ' %.');
        return;
      };
    };
    console.log('Такого промокода нет.');
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

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
    // this.count += x;
    const totalProducts = this.items.reduce((acc, item) =>
      acc + item.productQuantity, 0);
    return totalProducts;
  },

  calculateItemPrice() {
    const calculate = this.items.reduce((acc, item) =>
      acc + (item.productPrice * item.productQuantity), 0);

    return parseFloat((calculate * ((100 - this.discount) / 100)).toFixed(2));
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },

  print() {
    const result = JSON.stringify(this.items);

    console.log(result);
    console.log(this.totalPrice);
  },
};


cart.add('makaroshki', 3, 3);
cart.add('pureshka', 11);
cart.add('kotletki', 40);
cart.add('pelmeshki', 12, 5);
