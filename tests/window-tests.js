var TestConstants = require('./lib/test-constants');
var TestHelper = require('./lib/test-helper');
var WindowTestHelper = require('./lib/window-test-helper')

var Window = require('../lib/window');

function setUp() {
  WindowTestHelper.activate();
  WindowTestHelper.closeEveryWindow();  
}

function tearDown() {
  WindowTestHelper.closeEveryWindow();  
}

function testFocusedWindow() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  var focusedWindow = Window.focusedWindow();
  var result = TestHelper.boundsEqualsBounds(focusedWindow.bounds(), TestConstants.testWindowBounds);
  TestHelper.assert(result, "The focused window's bounds should equal the test bounds");
  tearDown();
}

function testNoFocusedWindow() {
  setUp();
  var focusedWindow = Window.focusedWindow();
  var result = (focusedWindow === null);
  TestHelper.assert(result, "The focused window should equal null");
  tearDown();
}

testFocusedWindow();
testNoFocusedWindow();