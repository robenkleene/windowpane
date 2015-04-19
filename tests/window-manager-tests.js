var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');
var WindowManager = require('../lib/window-manager');

function testEmptyConstructor() {
  var mockScreen = {
    bounds: function () {
      return TestConstants.testScreenBounds;
    }
  }
  var windowManager = new WindowManager(null, null, mockScreen);
  TestHelper.assert(windowManager.grid.horizontalBlocks == TestConstants.defaultHorizontalBlocks, "The new grid should have the default number of horizontal blocks");
  TestHelper.assert(windowManager.grid.verticalBlocks == TestConstants.defaultVerticalBlocks, "The new grid should have the default number of vertical blocks");
}

testEmptyConstructor();