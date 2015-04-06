var Screen = require("./screen");

var DEFAULT_HORIZONTAL_BLOCKS = 6;
var DEFAULT_VERTICAL_BLOCKS = 3;

var Grid = (function() {
  function Grid(horizontalBlocks, verticalBlocks) {
    this.horizontalBlocks = horizontalBlocks;
    this.verticalBlocks = verticalBlocks;
    if (!this.horizontalBlocks) {
      this.horizontalBlocks = DEFAULT_HORIZONTAL_BLOCKS;
    }
    if (!this.verticalBlocks) {
      this.verticalBlocks = DEFAULT_VERTICAL_BLOCKS;
    }
  }

  Grid.prototype.nearestGridCoordinatesForWindow = function(window) {
    var windowBounds = window.bounds();
    var screenBounds = Screen.bounds();
    var blockWidth = screenBounds.width / this.horizontalBlocks
    var blockHeight = screenBounds.height / this.horizontalBlocks

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


// local winframe = win:frame()
// local screenrect = win:screen():frame()
// local thirdscreenwidth = screenrect.w / grid.GRIDWIDTH
// local halfscreenheight = screenrect.h / grid.GRIDHEIGHT
// return {
//   x = round((winframe.x - screenrect.x) / thirdscreenwidth),
//   y = round((winframe.y - screenrect.y) / halfscreenheight),
//   w = math.max(1, round(winframe.w / thirdscreenwidth)),
//   h = math.max(1, round(winframe.h / halfscreenheight)),
// }