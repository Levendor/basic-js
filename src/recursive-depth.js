'use strict'
module.exports = class DepthCalculator {
  constructor() {
    this.currentDepth = 0;
    this.depth = 1;
  }

  calculateDepth(arr) {
    let array = arr.filter(item => Array.isArray(item));
		if (array.length === 0) {
      this.currentDepth = this.depth;
      this.depth = 1;
			return this.currentDepth;
		} else {
				this.depth++;
				return this.calculateDepth([].concat(...array));
			}

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};