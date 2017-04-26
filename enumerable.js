Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

[1, 2, 3].myEach( el => {
  console.log(el);
});
