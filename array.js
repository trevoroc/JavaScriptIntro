Array.prototype.uniq = function() {
  let elemSoFar = {};
  let newUniqArr = [];

  this.forEach((el) => {
    if (elemSoFar[el] === undefined) {
      elemSoFar[el] = true;
      newUniqArr.push(el);
    }
  });

  return newUniqArr;
};

// [1, 2, 1, 3, 3].uniq();

Array.prototype.twoSum = function () {
  let twoSums = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }

  return twoSums;
};

[-1, 0, 2, -2, 1].twoSum();
