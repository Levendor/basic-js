'use strict'
const CustomError = require("../extensions/custom-error");

class ChainMaker {
	
	constructor() {
		this.chain = [];
		this.finishedChain = [];
	}

  getLength() {
		return this.chain.length;
  }

  addLink(value) {
		this.chain.push('( ' + value + ' )');
		return this;
  }

  removeLink(position) {
		if (!isFinite(position)
				|| position < 1
				|| position > this.chain.length
				|| (position^0) != position) {
      this.chain = [];
			throw Error('Wrong position!');
		};
		this.chain.splice(position-1, 1);
		return this;
  }

  reverseChain() {
		this.chain.reverse();
		return this;
  }

  finishChain() {
		this.finishedChain = this.chain.join('~~');
		this.chain = [];
		return this.finishedChain;
  }
};

const chainMaker = new ChainMaker();

module.exports = chainMaker;
