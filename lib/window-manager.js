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

  WindowManager.prototype.moveFocusedWindowDown = function() {
    var window = Window.focusedWindow();
    var bounds = this.boundsMovedDown(window.bounds());
    bounds = this.grid.boundsHacked(bounds);
    window.bounds = bounds;
  };

  WindowManager.prototype.boundsMovedDown = function(bounds) {
    var gridCoordinates = this.grid.nearestGridCoordinatesForBounds(bounds);
    gridCoordinates.y++;
    gridCoordinate = this.grid.validGridCoordinates(gridCoordinates);
    var bounds = this.grid.boundsForGridCoordinates(gridCoordinates);
    return bounds;
  };

  return WindowManager;
})();
module.exports = WindowManager;