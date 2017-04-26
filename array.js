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
