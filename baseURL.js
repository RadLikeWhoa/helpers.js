/**
 * Find only the root name of any given URL. Optionally,
 *   the Top Level Domain can be hidden as well.
 *
 * @example   baseURL('http://www.maxvoltar.com/archive/more-beats')
 *
 * @param     {string}    url           The url to be parsed.
 * @param     {bool}      [hideTLD]     Show or hide the Top-Level domain (e.g. .com). (default: false)
 * 
 * @return    {string}    Returns the root of the URL.
 */

var baseURL = function (url, hideTLD) {
    var base = url.replace(/(http(s)?:\/\/)?(www\.)?/, '').split('/')[0];
    return hideTLD ? base.split('.')[0] : base;
};
