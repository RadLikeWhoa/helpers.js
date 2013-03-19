(function () {
  module('String.format')

  test('should return formatted string', function () {
    equal('Hello {0}!'.format('world'), 'Hello world!', 'formats one value correctly')
    equal('{0}, hello {1} world!'.format('Oh', 'beautiful'), 'Oh, hello beautiful world!', 'formats two values correctly')
    equal('Hello {0}, my name is {0}!'.format('John'), 'Hello John, my name is John!', 'formats one value correctly multiple times')
    equal('Hello {0}!'.format(), 'Hello {0}!', 'formats nothing because no parameter is given')
  })
}())