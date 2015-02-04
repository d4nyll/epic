Router.route('/', function () {
  this.render('main');
});

Router.route('/epicCreate', function () {
  this.render('epicCreate');
});

Router.route('/epicMultiple', function () {
  this.render('epicMultiple');
});