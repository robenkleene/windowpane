var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');

var Grid = require('../lib/grid');

function testConstructor() {
  var grid = new Grid(5, 5);
  TestHelper.assert(grid.horizontalBlocks == 5, "The new grid should have three horizontal blocks");
  TestHelper.assert(grid.verticalBlocks == 5, "The new grid should have three vertical blocks");
}

function testEmptyConstructor() {
  var grid = new Grid();
  TestHelper.assert(grid.horizontalBlocks == TestConstants.defaultHorizontalBlocks, "The new grid should have the default number of horizontal blocks");
  TestHelper.assert(grid.verticalBlocks == TestConstants.defaultVerticalBlocks, "The new grid should have the default number of vertical blocks");  
}

function testNearestGridCoordinatesForWindow() {
  var grid = new Grid(6, 3);
  var mockWindow = {
    bounds: function () {
      return TestConstants.testWindowBounds;
    }
  }
  var gridCoordinates = grid.nearestGridCoordinatesForWindow(mockWindow);

console.log("gridCoordinates = " + gridCoordinates)
TestHelper.logBounds(gridCoordinates);
  
  // get.x =   0
  // get.y =   0
  // get.w =   2
  // get.h =   2
}

testEmptyConstructor();
testConstructor();
testNearestGridCoordinatesForWindow();