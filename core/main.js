SolarC = new Mongo.Collection("solar");



// CLIENT

if (Meteor.isClient) {


	// SOLAR FORM ENTRY

	// Template.body.helpers({
		
	// });

	// Template.body.events({
	// 	"click .submit": function (event) {
	// 		var kwHours = event.target.kwHours.value,
	// 			dayNum = event.target.dayNum.value;

	// 		Meteor.call("saveDay", kwHours, dayNum);

	// 		event.target.kwHours.value = "";
	// 		event.target.dayNum.value = "";

	// 		return false;
	// 	}
	// });



}



// SERVER

if (Meteor.isServer) {
	
}



// METHODS

// Meteor.methods({
// 	saveDay: function (kwHours, dayNum) {
// 		alert(kwHours);    

// 		// SolarC.insert({
// 		//   entryDate: new Date(),
// 		//   day: new Date(),
// 		//   recorder: {
// 		//     id: Meteor.userId(),
// 		//     username: Meteor.user().username,
// 		//     name: ''
// 		//   },
// 		//   kwHours: kwHours
// 		// });
// 	}
// });
