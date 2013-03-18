(function () {
  module('String.insert')

  test('should insert at beginning of string', function () {
    ok('awesome.'.insert('This is ', 'start') === 'This is awesome.')
  })

  test('should insert into string at index', function () {
    ok('I am here.'.insert('in between ', 5) === 'I am in between here.')
  })

  test('should insert at end of string', function () {
    ok('Hello'.insert(' world.', 'end') === 'Hello world.')
  })
}())