var action = function(config) {

	var driver;

	if(config.execute === undefined) {
		throw "Implement an execute method! execute: function(driver){}";
	}

	if(config.success === undefined) {
		throw "Implement a success method! success: function(driver){}";
	}

	return {
		copyOf: function() {
			return action(config);
		},
		setDriver: function(theDriver) {
			driver = theDriver;
		},
		success: function() {
			config.success.apply(this, [driver]);
		},
		execute: function() {
			config.execute.apply(this, [driver]);
		}
	};
};

module.exports = action;
