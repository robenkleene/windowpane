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


// Bounds Move Tests

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

// Bounds Resize Tests

function testBoundsResizedDown() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsResizedDown(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsResizedDown);
  TestHelper.assert(result, "The bounds should equal the test window bounds resized down");  
}

function testBoundsResizedUp() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsResizedUp(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsResizedUp);
  TestHelper.assert(result, "The bounds should equal the test window bounds resized up");  
}

function testBoundsResizedLeft() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsResizedLeft(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsResizedLeft);
  TestHelper.assert(result, "The bounds should equal the test window bounds resized left");  
}

function testBoundsResizedRight() {
  windowManager = new WindowManager(null, null, mockScreen);
  var bounds = windowManager.boundsResizedRight(TestConstants.testWindowBounds); 
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsResizedRight);
  TestHelper.assert(result, "The bounds should equal the test window bounds resized right");  
}



// Window Move Tests

function testMoveWindowDown() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowDown();
  var testWindowBoundsHacked = windowManager.grid.boundsHacked(TestConstants.testWindowBoundsMovedDown);
  var result = TestHelper.boundsEqualsBounds(Window.focusedWindow().bounds(), testWindowBoundsHacked);
  TestHelper.assert(result, "The windows bounds should equal the hacked test window bounds moved down");
  tearDown();
}

function testMoveWindowUp() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowUp();
  var testWindowBoundsHacked = windowManager.grid.boundsHacked(TestConstants.testWindowBoundsMovedUp);
  var result = TestHelper.boundsEqualsBounds(Window.focusedWindow().bounds(), testWindowBoundsHacked);
  TestHelper.assert(result, "The windows bounds should equal the hacked test window bounds moved up");
  tearDown();
}

function testMoveWindowLeft() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowLeft();
  var testWindowBoundsHacked = windowManager.grid.boundsHacked(TestConstants.testWindowBoundsMovedLeft);
  var result = TestHelper.boundsEqualsBounds(Window.focusedWindow().bounds(), testWindowBoundsHacked);
  TestHelper.assert(result, "The windows bounds should equal the hacked test window bounds moved left");
  tearDown();
}

function testMoveWindowRight() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowRight();
  var testWindowBoundsHacked = windowManager.grid.boundsHacked(TestConstants.testWindowBoundsMovedRight);
  var result = TestHelper.boundsEqualsBounds(Window.focusedWindow().bounds(), testWindowBoundsHacked);
  TestHelper.assert(result, "The windows bounds should equal the hacked test window bounds moved right");
  tearDown();
}


testEmptyConstructor();
testBoundsMovedDown();
testBoundsMovedUp();
testBoundsMovedLeft();
testBoundsMovedRight();
testBoundsResizedDown();
testBoundsResizedUp();
testBoundsResizedLeft();
testBoundsResizedRight();
testMoveWindowDown();
testMoveWindowUp();
testMoveWindowLeft();
testMoveWindowRight();