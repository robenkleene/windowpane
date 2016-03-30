WindowManagerLibrary = Library('windowpane');

var gridSize = { width: 6, height: 3 };


// Window

function performWindowAdjustment(windowAdjustment) {

  try {
    var windowFrame = WindowManagerLibrary.getFrameForFocusedWindow();
    var screenFrame = WindowManagerLibrary.getScreenFrameForWindowFrame(windowFrame);
    var gridCoordinates = WindowManagerLibrary.nearestGridCoordinatesForFrame(windowFrame, screenFrame, gridSize);
    windowAdjustment(gridCoordinates);
    gridCoordinates = WindowManagerLibrary.validGridCoordinates(gridCoordinates, gridSize);

    var frame = WindowManagerLibrary.frameForGridCoordinates(gridCoordinates, screenFrame, gridSize);
    WindowManagerLibrary.setFrameForFocusedWindow(frame);
  }

  catch(err) {
  }

}

// Move & Resize

function makeFocusedWindowHalfScreenLeft() {
  var gridCoordinates = {};
  gridCoordinates.x = 0;
  gridCoordinates.y = 0;
  gridCoordinates.width = gridSize.width / 2;
  gridCoordinates.height = gridSize.height;
  moveFocusedWindowToGridCoordinates(gridCoordinates);
}

function makeFocusedWindowHalfScreenRight() {
  var gridCoordinates = {};
  gridCoordinates.x = gridSize.width / 2;
  gridCoordinates.y = 0;
  gridCoordinates.width = gridSize.width;
  gridCoordinates.height = gridSize.height;
  moveFocusedWindowToGridCoordinates(gridCoordinates);
}

function moveFocusedWindowToGridCoordinates(gridCoordinates) {
  var windowFrame = WindowManagerLibrary.getFrameForFocusedWindow();
  var screenFrame = WindowManagerLibrary.getScreenFrameForWindowFrame(windowFrame);
  var frame = WindowManagerLibrary.frameForGridCoordinates(gridCoordinates, screenFrame, gridSize);
  WindowManagerLibrary.setFrameForFocusedWindow(frame);
}

// Move

function moveFocusedWindowLeft() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.x--; };
  performWindowAdjustment(windowAdjustment);
}

function moveFocusedWindowRight() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.x++; };
  performWindowAdjustment(windowAdjustment);
}

function moveFocusedWindowUp() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.y--; };
  performWindowAdjustment(windowAdjustment);
}

function moveFocusedWindowDown() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.y++; };
  performWindowAdjustment(windowAdjustment);
}

// Resize

function resizeFocusedWindowLeft() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.width--; };
  performWindowAdjustment(windowAdjustment);
}

function resizeFocusedWindowRight() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.width++; };
  performWindowAdjustment(windowAdjustment);
}

function resizeFocusedWindowUp() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.height--; };
  performWindowAdjustment(windowAdjustment);
}

function resizeFocusedWindowDown() {
  var windowAdjustment = function(gridCoordinates) { gridCoordinates.height++; };
  performWindowAdjustment(windowAdjustment);
}


// Screen

function performScreenAdjustment(screenAdjustment) {
  var windowFrame = WindowManagerLibrary.getFrameForFocusedWindow();
  var screenFrames = WindowManagerLibrary.getScreenFrames();
  var index = WindowManagerLibrary.indexOfWindowFrameInScreenFrames(windowFrame, screenFrames);

  index = screenAdjustment(index);
  if (index >= screenFrames.length) {
    index = 0;
  } else if (index < 0) {
    index = screenFrames.length - 1;
  }

  var destinationScreenFrame = screenFrames[index];

  var screenFrame = WindowManagerLibrary.getScreenFrameForWindowFrame(windowFrame);
  var gridCoordinates = WindowManagerLibrary.nearestGridCoordinatesForFrame(windowFrame, screenFrame, gridSize);
  var frame = WindowManagerLibrary.frameForGridCoordinates(gridCoordinates, destinationScreenFrame, gridSize);
  WindowManagerLibrary.setFrameForFocusedWindow(frame);
}

function moveFocusedWindowToNextScreen() {
  var screenAdjustment = function(index) { index++; return index; };
  performScreenAdjustment(screenAdjustment);
}

function moveFocusedWindowToPreviousScreen() {
  var screenAdjustment = function(index) { index--; return index; };
  performScreenAdjustment(screenAdjustment);
}
