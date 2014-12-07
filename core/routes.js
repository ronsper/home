// CLIENT ROUTES

// Route configs
Router.configure({
  layoutTemplate: 'defaultLayout'
});

// Core pages
Router.route('/', function () {
	this.render('core.home');
});

// Solor Feature Pages
Router.route('/solar', function () {
	this.render('solar.list');
});
