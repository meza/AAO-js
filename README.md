# AAO-js #

The JavaScript implementation of the aao framework.

## Usage ##
The lib is designed to be used with any driver you could imagine.
Phantomjs, casperjs, or any custom implementations.
Basically, the library does not care.

You have to pass the driver to the actor, and your custom execute scripts should
know how to use it.


```javascript

var aao = require("AAO-js");

var driver = {
	click: function(element) {
		//...
	}
};

/**
 * Or it could be:
 *
 * var driver = casper;
 */

var anActor = aao.createActor(driver);

aao.actorManager.addActor("Bob", anActor);

var theAction = aao.createAction({
	success: function(driver){
		return driver.responseCode() === 200;
	},
	execute: function(driver) {
	 	driver.click("button");
	 	//... etc
	}
});

aao.actorManager.getActor("Bob").execute(theAction);

```
