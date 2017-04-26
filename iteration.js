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

let arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
