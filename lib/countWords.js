/*
    Name:              countWords
    Description:       Count the words inside a given element. The output can be formatted using the {words} placeholder. 
    Example Usage:     countWords(document.getElementById('text'), 'This text is {words} long.')
                       "Hello World, you know I'm awesome.".countWords('', 'This string is {words} long.')
    Arguments:         item (string / object), format (string)
    Prototype:         {Object}.prototype.countWords = countWords
*/

var countWords = function(item, format) {
    var count = 0,
        text = [],
        output = format || '{words}';
    
    if (item.length > 0) {
        if (typeof item === 'string') {
            // If the parameter is a string, just set the text array to the given value, split at spaces.
            text = item.replace(/\s/g, ' ').split(' ');
        } else if (typeof item === 'object') {
            // If it's not a string, but an element, get the element's innerText and split it at spaces.
            text = item.innerText.replace(/\s/g, ' ').split(' ');
        } 
    } else {
        // Enable prototyping (especially useful on strings)
        text = this.replace(/\s/g, ' ').split(' ');        
    }

    // Loop through text[] counting each value if it contains more than 0 characters
    for (var i = 0; i < text.length; i++) {
        if (text[i].length > 0) {
            count++;
        }
    }
    
    output = output.replace(/{words}/, count);

    return output;
};

String.prototype.countWords = countWords;