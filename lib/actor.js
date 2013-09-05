module.exports = function (driver) {
	var lastAction = {};
	var context = context || {
		setLastAction: function (a) {
		}
	};

	/**
	 * @type {string} The actor's label
	 */
	var label;

	var setLastAction = function (action) {
		lastAction = action;
		context.setLastAction(lastAction);
	};

	return {

		setContext: function (theContext) {
			context = theContext;
		},

		execute: function (action) {
			action.setDriver(driver);
			action.execute();
			setLastAction(action);
		},

		lastAction: function () {
			return lastAction;
		},

		/**
		 * @returns {string}
		 */
		getLabel: function () {
			return label;
		},

		/**
		 * @param {!string} theLabel
		 */
		setLabel: function (theLabel) {
			if (theLabel !== undefined) {
				label = theLabel;
			}
		}
	};
};
