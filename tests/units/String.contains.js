(function () {
  module('String.contains')

  test('should return correct bool', function () {
    equal(['Hello', 'world!'].contains('world!'), true, 'returns true')
  })
}())