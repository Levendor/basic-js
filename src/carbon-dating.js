const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  let period = Math.log2(MODERN_ACTIVITY / +sampleActivity) / k;
  if (!isFinite(period) || period < 1) return false;
  return Math.ceil(period);
};
