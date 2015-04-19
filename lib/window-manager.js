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
  }

  Grid.prototype.moveWindowDown = function(window) {
    var windowBounds = window.bounds();
    var gridCoordinates = nearestGridCoordinatesForBounds(windowBounds);
    var gridCoordinatesAdjustment = function(gridCoordinates) {
      bounds.y = Math.min(gridCoordinates.y + 1, this.verticalBlocks - gridCoordinates.h);
    };
     // grid.adjust_focused_window(function(f) f.y = math.min(f.y + 1, grid.GRIDHEIGHT - f.h) end)
  };


  return WindowManager;
})();
module.exports = WindowManager;