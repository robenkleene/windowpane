var TestHelper = require('./lib/test-helper');
var TestConstants = require('./lib/test-constants');

function testGetScreenFrames() {
  console.log("testGetScreenFrames");
  var frames = getScreenFrames();
  TestHelper.assert(frames.length > 0, "There should be at least one screen");
  for(var i = 0; i < frames.length; i++) {
    var frame = frames[i];
    TestHelper.assert(frame.x >= 0, "The frame's x should greater than or equal to zero");
    TestHelper.assert(frame.y >= 0, "The frame's y should greater than or equal to zero");
    TestHelper.assert(frame.width > 0, "The frame's width should greater than to zero");
    TestHelper.assert(frame.height > 0, "The frame's width should greater than to zero");
    TestHelper.assert(frame.x < frame.width, "The frame's x should less than the it's width");
    TestHelper.assert(frame.y < frame.height, "The frame's y should less than the it's height");
    TestHelper.assert(frame.y == TestConstants.testMenuBarHeight, "The frame's y should equal the menu bar's height");
  }
}

function testFrameWithLargestIntersection() {
  console.log("testFrameWithLargestIntersection");
  var testFrames = [TestConstants.testTinyScreenFrame, TestConstants.testScreenFrame, TestConstants.testTinyScreenFrame];
  var frame = frameWithLargestIntersection(TestConstants.testWindowFrame, testFrames);
  var result = TestHelper.frameEqualsFrame(frame, TestConstants.testScreenFrame);
  TestHelper.assert(result, "The frame should equal the test screen frame")
}

function testIndexOfFrameWithLargestIntersection() {
  console.log("testIndexOfFrameWithLargestIntersection");
  var testFrames = [TestConstants.testTinyScreenFrame, TestConstants.testScreenFrame, TestConstants.testTinyScreenFrame];
  var index = indexOfFrameWithLargestIntersection(TestConstants.testWindowFrame, testFrames);
  TestHelper.assert(index == 1, "The index of the frame should equal one")
}

function testNearestGridCoordinatesForFrame() {
  console.log("testNearestGridCoordinatesForFrame");
  var gridCoordinates = nearestGridCoordinatesForFrame(TestConstants.testWindowFrame, TestConstants.testScreenFrame, TestConstants.testGridSize);
  var result = TestHelper.frameEqualsFrame(gridCoordinates, TestConstants.testGridCoordinatesForTestWindow);
  TestHelper.assert(result, "The grid coordinates should equal the test grid coordinates for the test window")
}

function testFrameForGridCoordinates() {
  console.log("testFrameForGridCoordinates");
  var frame = frameForGridCoordinates(TestConstants.testGridCoordinatesForTestWindow, TestConstants.testScreenFrame, TestConstants.testGridSize);
  var result = TestHelper.frameEqualsFrame(frame, TestConstants.testWindowBoundsWithTestGridCoordinates);
  TestHelper.assert(result, "The frame should equal the test window frame with test grid coordinates");
}

function testValidGridCoordinates() {
  console.log("testValidGridCoordinates");

  var gridSize = { width: 6, height: 3 };

  // Valid
  var gridCoordinates = { x: 0, y: 0, width: 2, height: 2 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  var result = TestHelper.frameEqualsFrame(gridCoordinates, resultGridCoordinates);
  TestHelper.assert(result, "The grid coordinates should match");

  // Width Too high
  var gridCoordinates = { x: 0, y: 0, width: 7, height: 2 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  TestHelper.assert(resultGridCoordinates.width == gridSize.width, "The width should match");

  // Height Too high
  var gridCoordinates = { x: 0, y: 0, width: 5, height: 4 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  TestHelper.assert(resultGridCoordinates.height == gridSize.height, "The height should match");

  // Width Plus X Too high
  var gridCoordinates = { x: 1, y: 0, width: 6, height: 4 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  TestHelper.assert(resultGridCoordinates.width == 6, "The width should match");
  TestHelper.assert(resultGridCoordinates.x == 0, "The x should match");

  // Width Plus X Too high
  var gridCoordinates = { x: 1, y: 0, width: 6, height: 4 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  TestHelper.assert(resultGridCoordinates.width == 6, "The width should match");
  TestHelper.assert(resultGridCoordinates.x == 0, "The x should match");

  // Height Plus Y Too high
  var gridCoordinates = { x: 1, y: 2, width: 3, height: 3 };
  var resultGridCoordinates = validGridCoordinates(gridCoordinates, gridSize);
  TestHelper.assert(resultGridCoordinates.height == 3, "The height should match");
  TestHelper.assert(resultGridCoordinates.y == 0, "The y should match");
}

testGetScreenFrames();
testFrameWithLargestIntersection();
testNearestGridCoordinatesForFrame();
testFrameForGridCoordinates();
testValidGridCoordinates();
testIndexOfFrameWithLargestIntersection();