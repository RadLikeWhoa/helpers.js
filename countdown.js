/*
    Name:              countdown()
    Description:       Display a simple countdown from the current time to a defined end date.
    Example Usage:     countdown({
                           endDate: '05/14/2013',
                           output: '{days} days left!',
                           singularOutput: 'Just one more day left!',
                           endText: 'The wait is over!'
                       })
                       countdown('05/14/2013')
    Arguments:         config (object / string)
    Config:            config {
                           endDate: string,
                           output: string,
                           singularOutput: string,
                           endText: string,
                           endFunction: function
                       }
*/

var countdown = function (config) {
    var endDate = typeof config === 'string' ? config : config.endDate,
        remainder = (new Date(endDate) - new Date()) / 86400000,
        output = (config.output || '{days}').replace(/\{days\}/, Math.ceil(remainder));

    if (Math.ceil(remainder) == 1) {
        output = (config.singularOutput || config.output || '{days}').replace(/\{days\}/, remainder);
    }

    if (remainder <= 0 && config.endFunction) {
        config.endFunction();
    }

    if (config.elem) {
        config.elem.innerText = remainder > 0 ? output : config.endText || 'End!';
    } else {
        return remainder > 0 ? output : config.endText || 'End!';
    }
};