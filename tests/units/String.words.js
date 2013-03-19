(function () {
  module('String.words')

  test('should return correct word count', function () {
    equal('Hello, world!'.words(), 2, 'returns word count of 2')
  })
}())