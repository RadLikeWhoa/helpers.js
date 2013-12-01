/**
 * Bool check if an Array contains a value
 * 
 *
 * @example  ['Hello, world!'].contains('world!')
 *           true
 *
 * @return   {Bool} Returns bool true/false.
 */

Array.prototype.contains = Array.prototype.contains || function (value) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] === value) {
        return true;
      }
    }
    return false;
}