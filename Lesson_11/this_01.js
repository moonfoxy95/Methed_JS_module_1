'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set Width(value) {
    if (isNaN(value) || value === '') {
      return;
    };
    this._width = parseInt(value);
  },

  set Height(value) {
    if (isNaN(value) || value === '') {
      return;
    };
    this._height = parseInt(value);
  },

  get perimeter() {
    const res = (this._width + this._height) * 2 + ' см';
    console.log(res);
    return res;
  },

  get area() {
    const res = this._width * this._height + ' см^2';
    console.log(res);
    return res;
  },
};


rectangle.perimeter;
rectangle.area;
