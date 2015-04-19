var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');
var WindowManager = require('../lib/window-manager');

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

function testMoveWindowDown() {
  setUp();
  WindowTestHelper.makeWindowWithBounds(TestConstants.testWindowBounds);
  windowManager.moveFocusedWindowDown();
  tearDown();
}


testEmptyConstructor();
// testMoveWindowDown();