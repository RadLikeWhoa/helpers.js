/**
 * Count the words inside a given element. The output can be formatted using the
 *   {count} placeholder.
 *
 * @example   wordcount('Hello, it\'s me', 'This is {count} words long.')
 *
 * @param     {string}    text      The text to be counted.
 * @param     {string}    format    The format used for the output. Use `{count}` as a placeholder. (default: {count})
 * 
 * @return    {string, number}      Returns the number of words or the format.
 */

var wordcount = function (text, format) {
    var text = text.replace(/\s+/g, ' ').split(' ').length - 1,
        count = 0;

    do {
        count++;
    } while (text--);

    return format ? format.replace(/\{count\}/, count) : count;
};
