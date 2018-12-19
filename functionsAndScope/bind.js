// bind - used to copy existing function

let o = {
  x: 500,
  getId: function() {
    return this.x;
  }
};

let newO = { x: 123 };

// changes 'this' in o to newO
let newFn = o.getId.bind(newO);

console.log( newFn() );
