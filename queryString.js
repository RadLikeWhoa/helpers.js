/**
 * Extract query strings from a URL.
 *
 * @param {field} field The field in the query string to look up.
 * @param {string} [url] The URL to be parsed. If not specified, the query string portion of the current URL will be used.
 * 
 * @return {string} Returns the value of the field if it exists in the query string.
 * Otherwise, returns NULL.
 */

var queryString = function (value, url) {
  var match = [],
      query = {};
  
  url = url || window.location.search;
  
  if (value) {
    match = new RegExp('[?&]' + value + '=([^&]*)').exec(url)[0].replace(/[?&]/, '').split('=');
  } else {
    url = url.replace(/\?/, '').split('&');

    for (var i = 0; i < url.length; i++) {
      var field = url[i].split('=');
      query[field[0]] = decodeURIComponent(field.replace(/\+/g, ' '));
    }
  }

  return value ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : query;
};
