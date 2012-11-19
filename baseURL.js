/**
 * Name:              baseURL
 * Description:       Find only the root name of any given URL. Optionally, the Top Level Domain can be hidden as well.
 * Example Usage:     baseURL('http://maxvoltar.com/archive/more-beats')
 * Arguments:         url (string), hideTLD (bool)
 */

var baseURL = function (url, hideTLD) {
    var base = url.replace(/(http(s)?:\/\/)?(www\.)?/, '').split('/')[0];
    return hideTLD ? base.split('.')[0] : base;
};