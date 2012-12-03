/**
 * Name                   wordcount()
 * Description            Count the words inside a given element. The output
 *                        can be formatted using the {count} placeholder.
 *
 * wordcount('Hello, it\'s me', 'This is {count} words long.')
 *
 * @param     {string}    text
 * @param     {string}    format
 * @return    {string} / {number}
 */

var wordcount = function (text, format) {
    var text = text.replace(/\s+/g, ' ').split(' ').length - 1,
        count = 0;

    do {
        count++;
    } while (text--);

    return format ? format.replace(/\{count\}/, count) : count;
};