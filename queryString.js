/**
 * Extract query strings from a URL.
 *
 * @param {string} url The URL to be parsed.
 * @param {field} field The field in the query string to look up.
 * 
 * @return {string} Returns the value of the field if it exists in the query string.
 * Otherwise, returns NULL.
 */

var queryString = function (url, field) {
    var match = RegExp('[?&]' + field + '=([^&]*)').exec(url);
    if(!match)
      return null;
    return decodeURIComponent(match[1].replace(/\+/g, ' '));
};