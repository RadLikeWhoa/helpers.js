test('should return base name including TLD', function () {
  ok('https://www.twitter.com/mantia'.base() === 'twitter.com');
});

test('should return base name without TLD', function () {
  ok('https://www.twitter.com/mantia'.base(true) === 'twitter');
});