module('String.truncate')

test('should insert ellipsis after 7 characters', function () {
  ok('This is a longer text'.truncate(7) === 'This is…')
})

test('should insert [Read more] after 7 characters', function () {
  ok('This is a longer text'.truncate(7, ' [Read more]') === 'This is [Read more]')
})