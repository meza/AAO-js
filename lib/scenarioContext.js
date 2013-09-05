module.exports = function () {
	var subject;
	var action;
	var actor;

	return {
		getSubject: function () {
			return subject;
		},
		setSubject: function (theSubject) {
			subject = theSubject;
		},
		getLastActor: function () {
			return actor;
		},
		setLastActor: function (theActor) {
			actor = theActor;
		},
		getLastAction: function () {
			return action.copyOf();
		},
		setLastAction: function (theAction) {
			action = theAction;
		},
		clean: function () {
			subject = "";
			action = {};
			actor = {};
		}
	};

}();
