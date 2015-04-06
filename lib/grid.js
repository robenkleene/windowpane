var DEFAULT_HORIZONTAL_BLOCKS = 6;
var DEFAULT_VERTICAL_BLOCKS = 3;

var Grid = (function() {
  function Grid(horizontalBlocks, verticalBlocks, screen) {
    this.horizontalBlocks = horizontalBlocks;
    this.verticalBlocks = verticalBlocks;
    this.screen = screen;
    if (!this.horizontalBlocks) {
      this.horizontalBlocks = DEFAULT_HORIZONTAL_BLOCKS;
    }
    if (!this.verticalBlocks) {
      this.verticalBlocks = DEFAULT_VERTICAL_BLOCKS;
    }
    if (!this.screen) {
      this.screen = require("./screen");
    }
  }

  Grid.prototype.nearestGridCoordinatesForWindow = function(window) {
    var windowBounds = window.bounds();
    var screenBounds = this.screen.bounds();
    var blockWidth = screenBounds.width / this.horizontalBlocks
    var blockHeight = screenBounds.height / this.verticalBlocks

    var gridCoordinates = {};
    gridCoordinates.x = Math.round((windowBounds.x - screenBounds.x) / blockWidth);
    gridCoordinates.y = Math.round((windowBounds.y - screenBounds.y) / blockHeight);
    gridCoordinates.width = Math.max(1, Math.round(windowBounds.width / blockWidth));
    gridCoordinates.height = Math.max(1, Math.round(windowBounds.height / blockHeight));
    return gridCoordinates;
  };

  return Grid;
})();
module.exports = Grid;