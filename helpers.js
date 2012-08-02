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





/*
    Name:              readingTime
    Description:       Display the time it takes to read a given amount of words. The output can be formatted using the {time} placeholder. A reading speed of 180 words per minute is assumed, though this can be changed.
    Example Usage:     readingTime(2720, 'Reading this takes {time}.', 270);
    Arguments:         words (integer), format (string), wpm (integer) 
*/

var readingTime = function(words, format, wpm) {
    var text = format || '{time}',
        duration = Math.round(words / (wpm || 180)),
        regex = new RegExp(/{time}/);

    // Set the output to different values, depending on the calculated time.
    if (0 <= duration && duration < 2) {
        text = text.replace(regex, 'about a minute');
    } else if (duration < 55) {
        text = text.replace(regex, 'about ' + duration + ' minutes');
    } else if (55 <= duration && duration <= 65) {
        text = text.replace(regex, 'about an hour');
    } else {
        text = text.replace(regex, 'a lot of time');
    }

    return text;
};





/*
    Name:              baseURL
    Description:       Find only the root name of any given URL. Optionally, the Top Level Domain can be hidden as well.
    Example Usage:     baseURL('http://maxvoltar.com/archive/more-beats')
    Arguments:         url (string), hideTLD (bool)
*/

var baseURL = function(url, hideTLD) {
    // Remove prefixes and paths
    var base = url.replace(/(http(s)?:\/\/)?(www\.)?/, '').split('/')[0];

    // If the parameter is given, hide the Top Level Domain.
    if (hideTLD) {
        base = base.split('.')[0];
    }

    return base;
};





/*
    Name:              convertColor
    Description:       Convert a color value between HEX and RGB(a). When converting from HEX, a parameter controlling the opacity (alpha) can be set.
    Example Usage:     convertColor('#fff', 50)
    Arguments:         color (string), opacity (integer)
*/

var convertColor = function(color, opacity) {
    var _color = color.replace(/(rgba?\()?#?/, '').replace(/\)?/, '').split(','),
        hex = {},
        converted;

    if (_color.length > 1) {
        // Convert RGB to HEX
        converted = '#' + parseInt(_color[0], 10).toString(16) + parseInt(_color[1], 10).toString(16) + parseInt(_color[2], 10).toString(16);
        if (converted.substr(1,3) == converted.substr(4,3)) {
            // Make shorthand HEX values for colors like #abcabc.
            converted = converted.substr(0,4);
        } else if (converted[1] + converted[3] + converted[5] == converted[2] + converted[4] + converted[6]) {
            // Make shorthand HEX values for colors like #aabbcc.
            converted = "#" + converted[1] + converted[3] + converted[5];
        }
    } else {
        // Convert HEX to RGB
        if (_color[0].length == 3) {
            // Shorthand values need to be doubled
            hex = {
                r1: _color[0].substr(0,1),
                g1: _color[0].substr(1,1),
                b1: _color[0].substr(2)
            };
            hex.r = parseInt(hex.r1 + hex.r1, 16);
            hex.g = parseInt(hex.g1 + hex.g1, 16);
            hex.b = parseInt(hex.b1 + hex.b1, 16);
        } else {
            hex = {
                r: parseInt(_color[0].substr(0,2), 16),
                g: parseInt(_color[0].substr(2,2), 16),
                b: parseInt(_color[0].substr(4), 16)
            };
        }
        
        converted = '(' + hex.r + ', ' + hex.g + ', ' + hex.b;
        
        // If opacity is given, apply it and change the output format to rgba().
        if (opacity) {
            converted = 'rgba' + converted + ', ' + opacity / 100 + ')';
        } else {
            converted = 'rgb' + converted + ')';
        }
    }
    
    return converted;
};