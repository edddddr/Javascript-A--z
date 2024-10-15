'use strict';

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
