var TestsHelper = require('./lib/test-helper.js');
var WindowHelper = require('../lib/window-helper.js');
var TestConstants = require('./lib/test-constants.js');

function setUp() {
  TestsHelper.activate();
  TestsHelper.closeEveryWindow();  
}

function testFocusedWindow() {
  setUp();
  TestsHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  var focusedWindow = WindowHelper.getFocusedWindow();
  var result = TestsHelper.boundsEqualsBounds(focusedWindow.bounds(), TestConstants.testWindowBounds);
  TestsHelper.assert(result, "The focused window's bounds should equal the test bounds.");
}

function testNoFocusedWindow() {
  setUp();
  var focusedWindow = WindowHelper.getFocusedWindow();
  var result = (focusedWindow === null);
  TestsHelper.assert(result, "The focused window should equal null.");
}

testFocusedWindow();
testNoFocusedWindow();