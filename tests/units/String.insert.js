(function () {
  module('String.insert')

  test('should insert string into existing string', function () {
    equal('awesome.'.insert('This is ', 'start'), 'This is awesome.', 'inserts at beginning of string')
    equal('I am here.'.insert('in between ', 5), 'I am in between here.', 'inserts at given index')
    equal('Hello'.insert(' world.', 'end'), 'Hello world.', 'inserts at end of string')
    equal('awesome.'.insert('This is '), 'This is awesome.', 'inserts at beginning of string when no position is given')
    equal('awesome.'.insert(), 'awesome.', 'inserts nothing when no parameter is given')
  })
}())