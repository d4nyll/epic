Package.describe({
  name: 'd4nyll:epic',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('d4nyll:epic.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d4nyll:epic');
  api.addFiles('d4nyll:epic-tests.js');
});
