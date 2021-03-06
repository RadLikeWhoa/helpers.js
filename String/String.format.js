/**
 * Format a string using placeholders like `{0}`.
 *
 * @example  '{0}, hello {1} world!'.format('Oh', 'beautiful')
 *           'Oh, hello beautiful world!'
 *
 * @return   {String} Returns the new string.
 */

String.prototype.format = String.prototype.format || function () {
  var string = this

  for (var i = 0, j = arguments.length; i < j; i++) {
    string = string.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i])
  }

  return string
}