// constructor functions - used to instantiate new objs
// capital C - convention for constructors in JS

function Car(id) {
  this.carId = id;
  this.start = function() {
    console.log('start: ' + this.carId);
  }
}

let car = new Car(123);
car.start(); // start: 123
