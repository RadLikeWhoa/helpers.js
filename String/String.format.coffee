/**
 * Format a string using placeholders like `{0}`.
 *
 * @example  '{0}, hello {1} world!'.format('Oh', 'beautiful');
 *           'Oh, hello beautiful world!'
 *
 * @return   {String} Returns the new string.
 */

String::format = String::format or ->
  string = @

  for arg in arguments
    string = string.replace(new RegExp('\\{' + i + '\\}', 'gm'), arg)

  string