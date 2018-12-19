let o = {
  x: 500,
  getId: function(prefix) {
    return prefix + this.x;
  }
};

// call and apply - used to change 'this' in a function
let newTest = {x: 2020};
console.log(o.getId('normal '));
console.log(o.getId.apply(newTest, ['apply ']));
console.log(o.getId.call(newTest, ['call ']));