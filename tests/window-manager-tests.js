var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');
var WindowTestHelper = require('./lib/window-test-helper')

var WindowManager = require('../lib/window-manager');
var Window = require('../lib/window');

var windowManager;

var mockScreen = {
  bounds: function () {
    return TestConstants.testScreenBounds;
  }
};

function setUp() {
  WindowTestHelper.activate();
  WindowTestHelper.closeEveryWindow();  
  windowManager = new WindowManager(null, null, mockScreen);
}

function tearDown() {
  WindowTestHelper.closeEveryWindow();  
  windowManager = null;
}


function testEmptyConstructor() {
  var windowManager = new WindowManager(null, null, mockScreen);
  TestHelper.assert(windowManager.grid.horizontalBlocks == TestConstants.defaultHorizontalBlocks, "The new grid should have the default number of horizontal blocks");
  TestHelper.assert(windowManager.grid.verticalBlocks == TestConstants.defaultVerticalBlocks, "The new grid should have the default number of vertical blocks");
}

function testBoundsMovedDown() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsMovedDown(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsMovedDown);
  TestHelper.assert(result, "The bounds should equal the test window bounds moved down");  
}

function testBoundsMovedUp() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsMovedUp(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsMovedUp);
  TestHelper.assert(result, "The bounds should equal the test window bounds moved up");  
}

function testBoundsMovedLeft() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsMovedLeft(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsMovedLeft);
  TestHelper.assert(result, "The bounds should equal the test window bounds moved left");  
}

function testBoundsMovedRight() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsMovedRight(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsMovedRight);
  TestHelper.assert(result, "The bounds should equal the test window bounds moved right");  
}


function testMoveWindowDown() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowDown();
  var testWindowBoundsHacked = windowManager.grid.boundsHacked(TestConstants.testWindowBoundsMovedDown);
  var result = TestHelper.boundsEqualsBounds(Window.focusedWindow().bounds(), testWindowBoundsHacked);
  TestHelper.assert(result, "The windows bounds should equal the hacked test window bounds moved down");
  tearDown();
}

testEmptyConstructor();
testBoundsMovedDown();
testBoundsMovedUp();
testBoundsMovedLeft();
testBoundsMovedRight();
testMoveWindowDown();