/**
 * Determines if an object is a javascript string
 *
 * @example   isString(2342) returns false
 * @example   isString("yepitsastring") returns true
 *
 * @param     {Object}    Any javascript type 
 * @return    {bool}      Returns true if it is a javascript string
 */
var isString = function (obj) {
  return toString.call(obj) == '[object String]';
}

/**
 * Determines if input is a number
 *
 * @example   isNumber(2342) returns true
 * @example   isNumber("sdfs") returns false
 *
 * @param     {Object}    Any javascript type
 * @return    {bool}      Returns true if n is a number
 */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

