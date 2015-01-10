Package.describe({
  name: 'd4nyll:epic',
  summary: 'A JavaScript Markdown editor for Meteor, using EpicEditor.',
  version: '0.1.0-alpha',
  git: 'https://github.com/d4nyll/epic.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['templating'], 'client');
  api.addFiles('d4nyll:epic.html', 'client');
  api.addFiles('lib/0.2.2/js/epiceditor.js', 'client');
  api.addFiles('d4nyll:epic.css', 'client');
  api.addFiles('lib/0.2.2/themes/base/epiceditor.css', 'client', {isAsset: true});
  api.addFiles('lib/0.2.2/themes/preview/github.css', 'client', {isAsset: true});
  api.addFiles('lib/0.2.2/themes/editor/epic-dark.css', 'client', {isAsset: true});
  api.addFiles('d4nyll:epic.js', 'client');
  api.export('Epic', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d4nyll:epic');
  api.addFiles('d4nyll:epic-tests.js');
});
