'use strict';

const rectangle = {
  width: undefined,
  height: undefined,

  set setWidth(value) {
    this.width = parseInt(value);
  },

  set setHeight(value) {
    this.height = parseInt(value);
  },

  get perimeter() {
    const res = (this.width + this.height) * 2 + ' см';
    console.log(res);
    return res;
  },

  get area() {
    const res = this.width * this.height + ' см^2';
    console.log(res);
    return res;
  },
};

rectangle.setHeight = '5';
rectangle.setWidth = 7;

rectangle.perimeter;
rectangle.area;
