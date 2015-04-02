var TestsHelper = require('./lib/test-helper.js');
var WindowHelper = require('../lib/window-helper.js');
var TestConstants = require('./lib/test-constants.js');

function testFocusedWindow() {
  TestsHelper.activate();
  TestsHelper.closeEveryWindow();
  TestsHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  var focusedWindow = WindowHelper.getFocusedWindow();


  console.log(focusedWindow.bounds);
}

testFocusedWindow();