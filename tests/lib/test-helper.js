var TEST_APP_NAME = 'Finder';

exports.closeEveryWindow = function closeEveryWindow() {
	var App = Application(TEST_APP_NAME);
	var windows = App.windows;
	for (count = App.windows.length, i = count - 1; i >= 0; i--) {
		windows[i].close();
	}
}

exports.makeWindowWithBounds = function makeWindowWithBounds(bounds) {
	var App = Application(TEST_APP_NAME);
  App.FinderWindow().make();
  var windowOne = App.windows[0];
  windowOne.bounds = bounds;
}

exports.activate = function activate() {
	var App = Application(TEST_APP_NAME);
  App.activate();
}