Package.describe({
  name: 'd4nyll:epic',
  summary: 'A JavaScript Markdown editor for Meteor, using EpicEditor.',
  version: '0.0.0',
  git: 'https://github.com/d4nyll/epic.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['templating'], 'client');
  api.addFiles('d4nyll:epic.js', 'client');
  api.export('Epic', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d4nyll:epic');
  api.addFiles('d4nyll:epic-tests.js');
});
