Reminders = new Mongo.Collection("reminders");

if (Meteor.isClient) {

	// remindersList
	Template.remindersList.helpers({
		reminders: function() {
			return Reminders.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.remindersList.events({
		"click .new-reminder": function(event) {
			console.log(123);
		}
	});


	// remindersItem
	Template.remindersItem.helpers({
		isChecked: function() {
			return this.done ? 'fa-check-square-o' : 'fa-square-o';
		}
	});

	Template.remindersItem.events({
		// "click .list-group-item": function(event) {
		// 	$(event.target).css({height: '50px'});
		// }
	});
}

Meteor.methods({
	addReminder: function(text) {
	    Reminders.insert({
	    	text: text,
	    	createdAt: new Date(),
	    	done: false
	    });
  	}
});

if (Meteor.isServer) {
	//
}