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
