module.exports = function(theContext) {
	var actors = [];
	var lastLabel = "";
	var context = theContext || {
		setLastAction: function(action){},
		setLastActor: function(actor){}
	};

	var isRelativeActor = function(actorLabel) {
		var label = actorLabel.toLowerCase();
		var relatives = ["he", "she"];

		return (relatives.indexOf(label) > -1);
	};

	var setLastActor = function(actorLabel) {
		context.setLastActor(actors[actorLabel]);
		lastLabel = actorLabel;
	};

	return {
		addContext: function(theContext) {
			context = theContext;
		},
		getActor: function(actorLabel) {
			if(isRelativeActor(actorLabel)) {
				return this.lastActor();
			}

			var actor = actors[actorLabel];

			if (actor === undefined) {
				throw "Actor not found";
			}

			setLastActor(actorLabel);
			return actor;

		},
		lastActor: function() {
			return this.getActor(lastLabel);
		},
		addActor: function(actorLabel, actor) {
			if (isRelativeActor(actorLabel)) {
				throw actorLabel+" is a relative actor, do not use as a label";
			}

			actor.setContext(context);
			actor.setLabel(actorLabel);
			actors[actorLabel] = actor;
			setLastActor(actorLabel);
			return actor;
		}

	};

};
