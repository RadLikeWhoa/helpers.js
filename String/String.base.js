/**
 * Gets only the base of a given URL.
 *
 * @example  'https://www.twitter.com/mantia'.base()
 *           'twitter.com'
 *
 * @param    [hideTLD] {Boolean} Show or hide the Top-Level domain
 *                               (e.g. '.com'). (default: false)
 *
 * @return   {String} Returns the new URL's base.
 */

String.prototype.base = String.prototype.base || function (hideTLD) {
  var base = this.replace(/(http(s)?:\/\/)?(www\.)?/, '').split('/')[0]
  return hideTLD ? base.split('.')[0] : base
}