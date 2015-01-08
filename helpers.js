/**
 * helpers.js — Small JavaScript functions for common use cases.
 *
 * @version 2.1.1
 * @license MIT
 * @author  Sacha Schmid (http://sacha.me)
 */

/**
 * Display the time it takes to read a given amount of words. The output can be
 * formatted using the {time} placeholder. A reading speed of 180 words per
 * minute (wpm) is assumed, though this can be changed.
 *
 * @example   readingtime(2720, 'Reading this takes {time}.', 270)
 *
 * @param     {number}    words     The number of words.
 * @param     {string}    format    The format to be used for the output. Use
 *                                  `{time}` as a placeholder.
 *                                  (default: {time})
 * @param     {number}    wpm       The value for words per minute.
 *                                  (default: 180)
 *
 * @return    {string}    Returns the human-readable time.
 */

var readingtime = function (words, format, wpm) {
  var text = format || '{time}',
      duration = Math.round(words / (wpm || 180)),
      placeholder = /\{time\}/,
      string = '',
      replacePlaceholder = function () {
        return text.replace(placeholder, string)
      }

  if (0 <= duration && 2 > duration) {
    string = 'about a minute'
  } else if (25 <= duration && 35 >= duration) {
    string = 'about half an hour'
  } else if (55 <= duration && 65 >= duration) {
    string = 'about an hour'
  } else if (55 > duration) {
    string = 'about ' + duration + ' minutes'
  } else {
    string = 'quite some time'
  }

  return replacePlaceholder()
};

/**
 * Rounds a number to a given precision and omits trailing 0 values.
 *
 * @example  100.51235.round(3)
 *           100.512
 *
 * @param    precision {Number} The level of procision, i.e. how many decimals
 *                              appear.
 *
 * @return   {Number} The given number, rounded to the given precision.
 */

Number.prototype.round = Number.prototype.round || function (precision) {
  return Math.round(this * Math.pow(10, (precision || 2))) / Math.pow(10, (precision || 2))
};

/**
 * Gets only the base of a given URL.
 *
 * @example  'https://www.twitter.com/mantia'.base()
 *           'twitter.com'
 *
 * @param    [hideTLD] {Boolean} Show or hide the Top-Level domain
 *                               (e.g. '.com'). (default: false)
 *
 * @return   {String} Returns the new URL's base.
 */

String.prototype.base = String.prototype.base || function (hideTLD) {
  var base = this.replace(/(http(s)?:\/\/)?(www\.)?/, '').split('/')[0]
  return hideTLD ? base.split('.')[0] : base
};

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
};

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
  if (!value) return this;
  position = position === 'end' ? this.length : position === 'start' ? 0 : position || 0
  return this.slice(0, position) + value + this.slice(position)
};

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
  return this.length > (length || 30) ? this.substr(0, (length || 30)).replace(/\s$/, '') + (substitute || '…') : this.toString()
};

/**
 * Count the words inside a given element. The output can be formatted using
 * the `{{count}}` placeholder.
 *
 * @example  'Hello, world!'.words()
 *           2
 *
 * @return   {Number} Returns the number of words in the given string.
 */

String.prototype.words = String.prototype.words || function () {
  return this.replace(/\s+/g, ' ').split(' ').length
}