/**
 * Rounds a number to a given precision and omits trailing 0 values.
 *
 * @example  100.51235.round(3);
 *           100.512
 *
 * @param    precision {Number} The level of procision, i.e. how many decimals appear.
 *
 * @return   {Number} The given number, rounded to the given precision.
 */

Number.prototype.round = Number.prototype.round || function (precision) {
  return Math.round(this * Math.pow(10, (precision || 2))) / Math.pow(10, (precision || 2));
}