// prototypes - complex. saves performance when there are many objs.

function Car(id){
  this.carId = id;
}

// only one function no matter how many 'car' objects there are
// saves a lot of memory
Car.prototype.start = function() {
  console.log('start: ' + this.carId);
};

Car.prototype.stop = function() {
  console.log('stopping: ' + this.carId);
}

let car = new Car(123);
car.start(); // start: 123
car.stop();