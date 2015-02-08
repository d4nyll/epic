Router.route('/', function () {
  this.render('main');
});

Router.route('/epicCreate', function () {
  this.render('epicCreate');
});

Router.route('/epicMultiple', function () {
  this.render('epicMultiple');
});

Router.route('/preload', function () {
  this.render('preload');
});

Router.route('/preloadapi', function () {
  this.render('preloadapi');
});