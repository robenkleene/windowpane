var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');

var Grid = require('../lib/grid');

var grid;

function testConstructor() {
  grid = new Grid(5, 5, TestConstants.testScreenBounds);
  TestHelper.assert(grid.horizontalBlocks == 5, "The new grid should have three horizontal blocks");
  TestHelper.assert(grid.verticalBlocks == 5, "The new grid should have three vertical blocks");
}

function setUp() {
  grid = new Grid(TestConstants.defaultHorizontalBlocks, TestConstants.defaultVerticalBlocks, TestConstants.testScreenBounds);
}

function tearDown() {
  grid = null;
}

function testNearestGridCoordinatesForWindow() {
  setUp();
  var gridCoordinates = grid.nearestGridCoordinatesForBounds(TestConstants.testWindowBounds);
  var result = TestHelper.boundsEqualsBounds(gridCoordinates, TestConstants.testGridCoordinatesForTestWindow);
  TestHelper.assert(result, "The grid coordinates should equal the grid coordinates for the test window");
}

function testBoundsForGridCoordinates() {
  setUp();
  var bounds = grid.boundsForGridCoordinates(TestConstants.testGridCoordinatesForTestWindow);
  var result = TestHelper.boundsEqualsBounds(bounds, TestConstants.testWindowBoundsWithTestGridCoordinates);
  TestHelper.assert(result, "The bounds should equal the test window bounds with test grid coordinates");
}

testConstructor();
testNearestGridCoordinatesForWindow();
testBoundsForGridCoordinates();