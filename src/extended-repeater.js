'use strict'
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let result = ['' + str],
			add = [''];
	if (options.repeatTimes) {
		result = new Array(options.repeatTimes);
	}
	if (options.additionRepeatTimes) {
		add = new Array(options.additionRepeatTimes)
  } 
	if (!(options.addition === undefined)) {
    add = add.fill('' + options.addition);
	}
	if (options.additionSeparator != undefined) {
		add = add.join('' + options.additionSeparator);
	} else add = add.join('|');
	if (options.separator != undefined) {
		result = result.fill('' + str + add).join(options.separator);
	} else result = result.fill('' + str + add).join('+');
	 return result;
};
  