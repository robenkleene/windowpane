var windowManager = new WindowManager(null, null, null);

function moveFinderWindowRight() {
  var TEST_APP_NAME = 'Finder';
	var App = Application(TEST_APP_NAME);
  App.activate();
  App.FinderWindow().make();
  var windowOne = App.windows[0];
  windowOne.bounds = { x: 50, y: 50, width: 500, height: 500 };
  windowManager.moveFocusedWindowRight();
}
moveFinderWindowRight();