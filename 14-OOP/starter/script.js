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

/*
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
*/

//////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (mak, speed) {
  this.speed = speed;
  this.mak = mak;
};

Car.prototype.chargerBattery = function (chargeTo) {
  this.chargerTo = chargeTo;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed * 20;
  this.mak = this.mak - 1;

  console.log(
    `Tesla going at ${this.mak} km/h, with a charge of ${this.speed}%`
  );
};

// const EV = new Car(2000, 23);

const Ev = function (speed, battery, charge) {
  Car.call(this, speed, battery);
  this.charge = charge;
};

const tesla = new Ev('Tesla', 69, 20);
*/
// EV.accelerate();
// EV.chargerBattery();

// const Ev = function()

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;

    // console.log(this.make, this.make);
  }

  accelerate() {
    this.speed += 20;
    return;
  }

  brake() {
    this.speed -= 10;
    return;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, speed, chargerTo) {
    super(make, speed);
    this.#charge = chargerTo;
  }

  accelerate() {
    this.speed += 20;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return;
  }

  brake() {
    this.speed -= 10;
    return;
  }
}
const Rivian = new EvCl('Rivian', 200, 24);
const mono = new CarCl('marc', 200);
mono.accelerate();

Rivian.accelerate();

// console.log(EvCl.__proto__);
