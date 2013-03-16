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
      return text.replace(placeholder, string);
    };

  if (0 <= duration && 2 > duration) {
    string = 'about a minute';
  } else if (25 <= duration && 35 >= duration) {
    string = 'about half an hour';
  } else if (55 <= duration && 65 >= duration) {
    string = 'about an hour';
  } else if (55 > duration) {
    string = 'about ' + duration + ' minutes';
  } else {
    string = 'quite some time';
  }

  return replacePlaceholder();
};