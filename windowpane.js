// Window

function setFrameForFocusedWindow(frame) {
  var focusedWindow = getFocusedWindow();
  setFrameForWindow(frame, focusedWindow);
}

function getFrameForFocusedWindow() {
  var focusedWindow = getFocusedWindow();
  return getFrameForWindow(focusedWindow);
}

function getFocusedWindow() {
  var frontMostApplicationProcesses = Application("System Events").processes.whose({ frontmost: true });
  var applicationProcess = frontMostApplicationProcesses[0];
  var firstWindow = applicationProcess.windows()[0];
  return firstWindow;
}

function getFrameForWindow(window) {
  var position = window.position();
  var size = window.size();
  var x = position[0];
  var y = position[1];
  var width = size[0];
  var height = size[1];
  var frame = {
    x: x,
    y: y,
    width: width,
    height: height
  };
  return frame;
}

function setFrameForWindow(frame, window) {
  window.position = [frame.x, frame.y];
  window.size = [frame.width, frame.height];
}

function getScreenFrameForWindowFrame(frame) {
  var screenFrames = getScreenFrames();
  return frameWithLargestIntersection(frame, screenFrames);
}

function indexOfFrameWithLargestIntersection(frame) {
  var screenFrames = getScreenFrames();
  return indexOfFrameWithLargestIntersection(frame, screenFrames);
}

// Screen

ObjC.import('AppKit');

// var MENUBAR_HEIGHT = $.NSMenuView.menuBarHeight();
var MENUBAR_HEIGHT = 23;

function getScreenFrames() {
  var cocoaScreens = $.NSScreen.screens;

  var screenFrames = [];
  for(var i = 0; i < cocoaScreens.count; i++) {
    var cocoaScreen = cocoaScreens.objectAtIndex(i);
    var rect = cocoaScreen.visibleFrame;
    var frame = frameFromRect(rect);
    frame.y += MENUBAR_HEIGHT;
    screenFrames.push(frame);
  }
  return screenFrames;
}

function frameFromRect(rect) {
  x = rect.origin.x;
  y = rect.origin.y;
  width = rect.size.width;
  height = rect.size.height;
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}

function indexOfWindowFrameInScreenFrames(windowFrame, screenFrames) {
  return indexOfFrameWithLargestIntersection(windowFrame, screenFrames);
}

function indexOfFrameWithLargestIntersection(frame, frames) {
  var info = infoForLargestIntersection(frame, frames);
  return info.index;
}

function frameWithLargestIntersection(frame, frames) {
  var info = infoForLargestIntersection(frame, frames);
  return info.frame;
}

function infoForLargestIntersection(frame, frames) {
  var bestVolume = 0;
  var bestFrame = frames[0];
  var bestIndex = 0;
  var rect = $.NSMakeRect(frame.x, frame.y, frame.width, frame.height);

  for(var i = 0; i < frames.length; i++) {
    var aFrame = frames[i];
    var aRect = $.NSMakeRect(aFrame.x, aFrame.y, aFrame.width, aFrame.height);
    var intersectionRect = $.NSIntersectionRect(rect, aRect);
    var volume = intersectionRect.size.width * intersectionRect.size.height;
    if (volume > bestVolume) {
      bestVolume = volume;
      bestFrame = frameFromRect(aRect);
      bestIndex = i;
    }
  }

  return {
    frame: bestFrame,
    index: bestIndex
  };
}


// Grid

function nearestGridCoordinatesForFrame(frame, inFrame, gridSize) {
  blockWidth = inFrame.width / gridSize.width;
  blockHeight = inFrame.height / gridSize.height;

  var gridCoordinates = {};
  gridCoordinates.x = Math.round((frame.x - inFrame.x) / blockWidth);
  gridCoordinates.y = Math.round((frame.y - inFrame.y) / blockHeight);
  gridCoordinates.width = Math.max(1, Math.round(frame.width / blockWidth));
  gridCoordinates.height = Math.max(1, Math.round(frame.height / blockHeight));
  return gridCoordinates;
}

function frameForGridCoordinates(gridCoordinates, inFrame, gridSize) {
  blockWidth = inFrame.width / gridSize.width;
  blockHeight = inFrame.height / gridSize.height;

  var x = Math.round(gridCoordinates.x * blockWidth + inFrame.x);
  var y = Math.round(gridCoordinates.y * blockHeight + inFrame.y);
  var w = Math.round(gridCoordinates.width * blockWidth);
  var h = Math.round(gridCoordinates.height * blockHeight);
  return { x: x, y: y, width: w, height: h };
}

function validGridCoordinates(gridCoordinates, gridSize) {
  gridCoordinates.x = Math.min(gridCoordinates.x, gridSize.width - gridCoordinates.width);
  gridCoordinates.x = Math.max(gridCoordinates.x, 0);
  gridCoordinates.y = Math.min(gridCoordinates.y, gridSize.height - gridCoordinates.height);
  gridCoordinates.y = Math.max(gridCoordinates.y, 0);
  gridCoordinates.width = Math.min(gridCoordinates.width, gridSize.width - gridCoordinates.x);
  gridCoordinates.width = Math.max(gridCoordinates.width, 1);
  gridCoordinates.height = Math.min(gridCoordinates.height, gridSize.height - gridCoordinates.y);
  gridCoordinates.height = Math.max(gridCoordinates.height, 1);
  return gridCoordinates;
}
