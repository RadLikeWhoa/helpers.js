(function () {
  module('Number.round')

  test('should round number to given precision', function () {
    equal((100.51235).round(3), 100.512, 'rounds to precision of 3')
    equal((100.51235).round(), 100.51, 'rounds to precision of 2 when no parameter is given')
  })
}())