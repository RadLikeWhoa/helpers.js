/**
 * Extract query strings from a URL.
 *
 * @param {field} field The field in the query string to look up.
 * @param {string} [url] The URL to be parsed. If not specified, the query string portion of the current URL will be used.
 * 
 * @return {string} Returns the value of the field if it exists in the query string.
 * Otherwise, returns NULL.
 */

var queryString = function (field, url) {
    if(!url)
        url = window.location.search;
    var match = RegExp('[?&]' + field + '=([^&]*)').exec(url);
    if(!match)
        return null;
    return decodeURIComponent(match[1].replace(/\+/g, ' '));
};