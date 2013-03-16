/**
 * Insert a string into another one at a given numerical index or a keyword.
 *
 * @example  'I am here.'.insert('in between ', 5)
 *           'I am in between here.'
 *
 * @param    value    {String}         The string to be inserted into the other
 *                                     one.
 * @param    position {String, Number} Can either be a numerical keyword or
 *                                     'start' / 'end'.
 *
 * @return   {String} Returns the new string.
 */

String.prototype.insert = String.prototype.insert || function (value, position) {
  position = position === 'end' ? this.length : position === 'start' ? 0 : position;
  return this.slice(0, position) + value + this.slice(position);
};