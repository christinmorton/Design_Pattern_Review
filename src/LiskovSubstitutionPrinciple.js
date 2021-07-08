class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  get isSquare() {
    return this._width === this._height;
  }

  toString() {
    return `${this._width}x${this._height}`;
  }
}

// the square implementation may be unecessary.
// Sometimes you can introduce a derived class that
// breaks the base class functionality. The base
// class in this case works just fine but the
// base class causes errors and private variables
// are being used publically.
// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   set width(value) {
//     this._width = this._height = value;
//   }

//   set height(value) {
//     this._width = this._height = value;
//   }
// }

let useIt = function (rc) {
  let width = rc._width;
  rc.height = 10;
  let temp = 10 * width;

  console.log(`Expected area of ${temp}, `, `got ${rc.area}`);
};

let rc = new Rectangle(2, 3);
// console.log(rc.toString());

// let sq = new Square(5);
// console.log(sq.toString());
// sq.width = 10;
// console.log(sq.toString());

useIt(rc);
// useIt(sq);
