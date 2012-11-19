/**
 * Name:              wordcount
 * Description:       Count the words inside a given element. The output can be formatted using the {words} placeholder.
 * Example Usage:     wordcount(document.getElementById('text').textContent, 'This text is {words} long.')
 * Arguments:         text (string), format (string)
 */

var wordcount = function (text, format) {
    var text = text.replace(/\s+/g, ' ').split(' ').length - 1,
        count = 0,
        output = format || '{words}';

    do {
        count++;
    } while (text--);

    return output.replace(/\{words\}/, count);
};