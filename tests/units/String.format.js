(function () {
  module('String.format')

  test('should return formatted string', function () {
    ok('{0}, hello {1} world!'.format('Oh', 'beautiful') === 'Oh, hello beautiful world!')
  })
}())