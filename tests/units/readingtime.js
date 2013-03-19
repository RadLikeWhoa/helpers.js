(function () {
  module('readingtime')

  test('should return calculated and formatted reading time', function () {
    equal(readingtime(2720, 'Reading this takes {time}.', 270), 'Reading this takes about 10 minutes.', 'returns user-formatted string')
    equal(readingtime(2720, null, 270), 'about 10 minutes', 'returns default-formatted string')
  })
}())