var TEST_APP_NAME = 'Finder';

exports.closeEveryWindow = function() {
	var App = Application(TEST_APP_NAME);
	var windows = App.windows;
	for (count = App.windows.length, i = count - 1; i >= 0; i--) {
		windows[i].close();
	}
};

exports.makeWindow = function() {
	var App = Application(TEST_APP_NAME);
  App.FinderWindow().make();
};

exports.activate = function activate() {
  var App = Application(TEST_APP_NAME);
  App.activate();
};