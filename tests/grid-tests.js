var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');

var Grid = require('../lib/grid');

function testConstructor() {
  var grid = new Grid(5, 5, TestConstants.testScreenBounds);
  TestHelper.assert(grid.horizontalBlocks == 5, "The new grid should have three horizontal blocks");
  TestHelper.assert(grid.verticalBlocks == 5, "The new grid should have three vertical blocks");
}

function testNearestGridCoordinatesForWindow() {
  var grid = new Grid(6, 3, TestConstants.testScreenBounds);
  var gridCoordinates = grid.nearestGridCoordinatesForBounds(TestConstants.testWindowBounds);

  var result = TestHelper.boundsEqualsBounds(gridCoordinates, TestConstants.testGridCoordinatesForTestWindow);
  TestHelper.assert(result, "The grid coordinates should equal the grid coordinates for the test window");
}

testConstructor();
testNearestGridCoordinatesForWindow();