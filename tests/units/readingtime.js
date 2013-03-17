module('readingtime')

test('2720 words at 270wpm should equal 10 minutes, formatted', function () {
  ok(readingtime(2720, 'Reading this takes {time}.', 270) === 'Reading this takes about 10 minutes.')
})

test('2720 words at 270wpm should equal 10 minutes', function () {
  ok(readingtime(2720, null, 270) === 'about 10 minutes')
})