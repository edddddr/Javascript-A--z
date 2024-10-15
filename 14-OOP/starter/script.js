'use strict';
/*
const Car = function (speed) {
  this.speed = `${speed} km/hr`;
};

const accelerate = (Car.prototype.accelerate = function () {
  let accelerate = 10 * `${this.speed.split(' ')[0]}`;

  console.log(accelerate);
});

const brake = (Car.prototype.brake = function () {
  console.log(`${this.speed >= 5 ? this.speed - 5 : 0}`);
});

const BMW = new Car(2000);
console.log(BMW);

const Mercedes = new Car(3000);
console.log(Mercedes);

BMW.accelerate();
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀 */
class RCarr {
  constructor(mak, speed) {
    this.mak = mak;
    this.speed = speed;
  }

  get speedUs() {
    return `The current speed is ${this.speed / 1.6} mi/h`;
  }

  set speedUs(speed) {
    return (this._speed = speed * 1.6);
  }
}

const BMW = new RCarr('BMW', 2000);

console.log(BMW);
