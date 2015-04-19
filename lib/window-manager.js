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
    var gridCoordinates = nearestGridCoordinatesForBounds(window.bounds());
    gridCoordinates.y = Math.min(gridCoordinates.y + 1, this.verticalBlocks - gridCoordinates.h);
    var bounds = grid.boundsForGridCoordinates(gridCoordinates);
    window.bounds = bounds;
  };

  return WindowManager;
})();
module.exports = WindowManager;