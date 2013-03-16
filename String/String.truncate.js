/**
 * Truncates the string to the given length and replaces superfluous characters
 * with the given substitute.
 *
 * @example  'This is a longer text'.truncate(7)
 *           'This is…'
 *
 * @param    [length] {Number} The number of characters after which the text
 *                             should be truncated. (default: 30)
 * @param    [substitute] {String} The substitute to append if the text exceeds
 *                                 the given limit. (default: '…')
 *
 * @return   {String} Returns the truncated string, followed by the substitute.
 */

String.prototype.truncate = String.prototype.truncate || function (length, substitute) {
  return this.length > (length || 30) ? this.substr(0, (length || 30)).replace(/\s$/, '') + (substitute || '…') : this.toString();
};