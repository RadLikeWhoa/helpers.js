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