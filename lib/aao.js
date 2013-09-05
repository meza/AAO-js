module.exports = function () {
	var ctx = require("./scenarioContext.js");
	return {
		context: ctx,
		actorManager: require("./actorManager.js")(ctx),
		createActor: require("./actor.js"),
		createAction: require("./action.js")
	};
}();
