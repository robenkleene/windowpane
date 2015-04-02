var TEST_APP_NAME = 'Finder';

exports.assert = function(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
}

exports.closeEveryWindow = function() {
	var App = Application(TEST_APP_NAME);
	var windows = App.windows;
	for (count = App.windows.length, i = count - 1; i >= 0; i--) {
		windows[i].close();
	}
}

exports.makeWindowWithBounds = function(bounds) {
	var App = Application(TEST_APP_NAME);
  App.FinderWindow().make();
  var windowOne = App.windows[0];
  windowOne.bounds = bounds;
}

exports.activate = function activate() {
  var App = Application(TEST_APP_NAME);
  App.activate();
}

exports.boundsEqualsBounds = function(bounds1, bounds2) {
  return (
    bounds1.x == bounds2.x &&
    bounds1.y == bounds2.y &&
    bounds1.width == bounds2.width &&
    bounds1.height == bounds2.height
  );
}

// Debug
exports.logBounds = function(bounds) {
    console.log("x = " + bounds.x);
    console.log("y = " + bounds.y);
    console.log("width = " + bounds.width);
    console.log("height = " + bounds.height);
}