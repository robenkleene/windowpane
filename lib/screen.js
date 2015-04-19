ObjC.import('AppKit');

// var MENUBAR_HEIGHT = $.NSMenuView.menuBarHeight();
var MENUBAR_HEIGHT = 23;

exports.bounds = function() {
  var screenOne = $.NSScreen.mainScreen;
  // The main screen is not necessarily the same screen that contains the menu bar or has its origin at (0, 0). The main screen refers to the screen containing the window that is currently receiving keyboard events. It is the main screen because it is the one with which the user is most likely interacting.
  // var screenOne = $.NSScreen.screens.objectAtIndex(0);
  var frame = screenOne.visibleFrame;
  x = frame.origin.x;
  y = frame.origin.y + MENUBAR_HEIGHT;
  width = frame.size.width;
  height = frame.size.height;
  return {
    x: x, 
    y: y, 
    width: width, 
    height: height
  };
};