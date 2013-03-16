test('should round number to precision of two', function () {
  ok((100.51235).round() === 100.51);
});

test('should round number to precision of three', function () {
  ok((100.51235).round(3) === 100.512);
});