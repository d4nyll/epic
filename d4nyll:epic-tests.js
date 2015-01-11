Tinytest.add('Epic - Package Configuration', function (test) {
  test.equal(true, true, 'A non-programming, configuration-related problem is detected.');
});

Tinytest.add('Epic - Epic Object exported', function (test) {
  test.equal(Epic.checkExported(), 'Epic object exported', 'Epic object did not export properly');
});

Tinytest.add('Epic - Epic Instances returned', function (test) {
  test.equal(typeof Epic.getInstances(), 'object', 'Epic instances did not return properly');
});