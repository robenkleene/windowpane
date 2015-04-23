var TestConstants = require('./lib/test-constants');
var TestHelper = require('./lib/test-helper');

var TestWindowHelper = require('./lib/test-window-helper');

function setUp() {
  TestWindowHelper.activate();
  delay(1);
  TestWindowHelper.closeEveryWindow();  
}

function tearDown() {
  TestWindowHelper.closeEveryWindow();  
}

function testFocusedWindow() {
  console.log("testFocusedWindow");
  setUp();
  TestWindowHelper.makeWindow();
  setFrameForFocusedWindow(TestConstants.testWindowFrame);
  var frame = getFrameForFocusedWindow();
  var result = TestHelper.frameEqualsFrame(frame, TestConstants.testWindowFrame);
  TestHelper.assert(result, "The focused window's frame should equal the test window frame")
  tearDown();
}

testFocusedWindow();