// CLIENT ROUTES

// Route configs
Router.configure({
  layoutTemplate: 'defaultLayout'
});

Router.map(function(){

	// Core
	this.route('coreHome', 					{path: '/'});

	// Projects Feature
	this.route('projectsList', 				{path: '/projects'});
	this.route('projectsNew', 				{path: '/projects/item'});

	// Reminders Feature
	this.route('remindersList', 			{path: '/reminders'});

	// Transactions Feature
	this.route('transactionsList', 			{path: '/transactions'});
	this.route('transactionsCatigories', 	{path: '/transactions/catigories'});
	this.route('transactionsItem', 			{path: '/transactions/item'});
	this.route('transactionsConfig', 		{path: '/transactions/config'});

	// Solar Feature
	this.route('solarList', 				{path: '/solar'});
	this.route('solarEntry', 				{path: '/solar/entry'});

	// Store Feature
	this.route('storeHome', 				{path: '/store'});

	// Calendar Feature
	this.route('calendarFull', 				{path: '/calendar'});
});