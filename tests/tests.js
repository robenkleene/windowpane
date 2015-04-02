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
console.log("result = " + result)
}

testFocusedWindow();