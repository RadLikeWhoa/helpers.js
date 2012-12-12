/**
 * Scroll the body element to the top, only using Vanilla JS.
 *
 * @example   smoothscroll()
 */

var smoothscroll = function () {
  var body = document.body || document.documentElement,
      scrollTop = body.scrollTop,
      start = new Date().getTime(),
      anim = setInterval(function () {
        body.scrollTop = scrollTop + ((start - new Date().getTime()) / 250) * scrollTop;

        if (0 === body.scrollTop) {
          clearInterval(anim);
        }
      }, 0);
}
