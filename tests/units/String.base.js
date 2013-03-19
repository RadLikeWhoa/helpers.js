(function () {
  module('String.base')

  test('should return base name', function () {
    equal('https://www.twitter.com/mantia'.base(), 'twitter.com', 'returns base name inclunding TLD')
    equal('https://www.twitter.com/mantia'.base(true), 'twitter', 'returns base name without TLD (hideTLD is explicitly true)')
    equal('https://www.twitter.com/mantia'.base(1), 'twitter', 'returns base name without TLD (hideTLD is truthy value)')
  })
}())