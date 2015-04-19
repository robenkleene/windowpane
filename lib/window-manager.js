var Grid = require('./grid');
var Window = require('./window');

var DEFAULT_HORIZONTAL_BLOCKS = 6;
var DEFAULT_VERTICAL_BLOCKS = 3;

var WindowManager = (function() {
  function WindowManager(horizontalBlocks, verticalBlocks, Screen) {

    if (!horizontalBlocks) {
      horizontalBlocks = DEFAULT_HORIZONTAL_BLOCKS;
    }

    if (!verticalBlocks) {
      verticalBlocks = DEFAULT_VERTICAL_BLOCKS;
    }

    if (!Screen) {
      Screen = require("./screen");
    }

    var screenBounds = Screen.bounds();
    this.grid = new Grid(horizontalBlocks, verticalBlocks, screenBounds);
  };


  // Move Window

  WindowManager.prototype.moveFocusedWindowDown = function() {
    var window = Window.focusedWindow();
    var bounds = this.boundsMovedDown(window.bounds());
    bounds = this.grid.boundsHacked(bounds);
    window.bounds = bounds;
  };

  WindowManager.prototype.moveFocusedWindowUp = function() {
    var window = Window.focusedWindow();
    var bounds = this.boundsMovedUp(window.bounds());
    bounds = this.grid.boundsHacked(bounds);
    window.bounds = bounds;
  };

  WindowManager.prototype.moveFocusedWindowLeft = function() {
    var window = Window.focusedWindow();
    var bounds = this.boundsMovedLeft(window.bounds());
    bounds = this.grid.boundsHacked(bounds);
    window.bounds = bounds;
  };

  WindowManager.prototype.moveFocusedWindowRight = function() {
    var window = Window.focusedWindow();
    var bounds = this.boundsMovedRight(window.bounds());
    bounds = this.grid.boundsHacked(bounds);
    window.bounds = bounds;
  };


  // Move Bounds

  WindowManager.prototype.boundsMovedDown = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.y++;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsMovedUp = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.y--;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsMovedRight = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.x++;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsMovedLeft = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.x--;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };
  
  // Resize Bounds

  WindowManager.prototype.boundsResizedDown = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.height++;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsResizedUp = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.height--;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsResizedRight = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.width++;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  WindowManager.prototype.boundsResizedLeft = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.width--;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  return WindowManager;
})();
module.exports = WindowManager;