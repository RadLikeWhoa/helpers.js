module('String.words')

test('should return word count of 2', function () {
  ok('Hello, world!'.words() === 2)
})