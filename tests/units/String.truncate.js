(function () {
  module('String.truncate')

  test('should truncate text correctly', function () {
    equal('This is a longer text'.truncate(7), 'This is…', 'inserts ellipsis after 7 (non-whitespace) characters')
    equal('This is a longer text'.truncate(7, ' [Read more]'), 'This is [Read more]', 'inserts [Read more] after 7 (non-whitespace) characters')
    equal('This is a longer text'.truncate(' [Read more]'), 'This is a longer text', 'no truncation when no length is given')
    equal('This is a longer text'.truncate(), 'This is a longer text', 'no truncation when no parameters given')
  })
}())