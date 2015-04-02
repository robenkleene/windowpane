var TestConstants = require('./lib/test-constants.js');
var TestsHelper = require('./lib/test-helper.js');
var WindowTestsHelper = require('./lib/window-tests-helper.js')

var Window = require('../lib/window.js');

function setUp() {
  WindowTestsHelper.activate();
  WindowTestsHelper.closeEveryWindow();  
}

function testFocusedWindow() {
  setUp();
  WindowTestsHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  var focusedWindow = Window.getFocusedWindow();
  var result = TestsHelper.boundsEqualsBounds(focusedWindow.bounds(), TestConstants.testWindowBounds);
  TestsHelper.assert(result, "The focused window's bounds should equal the test bounds.");
}

function testNoFocusedWindow() {
  setUp();
  var focusedWindow = Window.getFocusedWindow();
  var result = (focusedWindow === null);
  TestsHelper.assert(result, "The focused window should equal null.");
}

testFocusedWindow();
testNoFocusedWindow();