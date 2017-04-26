Array.prototype.bubbleSort = function() {
  let notSorted = true;

  while (notSorted) {
    notSorted = false;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        notSorted = true;

        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }

  return this;
};

// let arr = [5, 4, 3, 2, 1];
// arr.bubbleSort();

function substrings(string) {
  let substringArr = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substringArr.push(string.substring(i, j));
    }
  }

  return substringArr;
}

// substrings("cat");

function range(start, end) {
  if (end < start) {
    return [];
  } else {
    return [start].concat(range(start + 1, end));
  }
}

// range(1, 5);

Array.prototype.sum = function() {
  if (this.length === 0) {
    return 0;
  } else {
    return this[0] + this.slice(1).sum();
  }
};

// [1,1,1,2].sum();

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
}

// exponent1(2, 3);

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    let sqrt = exponent2(base, exp / 2);
    return sqrt * sqrt;
  } else {
    let factor = exponent2(base, (exp - 1) / 2);
    return base * factor * factor;
  }
}

exponent2(2, 3);
