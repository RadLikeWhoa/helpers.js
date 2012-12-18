/**
 * Extract query strings from a URL.
 *
 * @param     {string}    url           The url to be parsed.
 * @param     {bool}      [hideTLD]     Show or hide the Top-Level domain (e.g. .com). (default: false)
 * 
 * @return    {string}    Returns the root of the URL.
 */

var queryString = function (url, field) {
    var match = RegExp('[?&]' + field + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};