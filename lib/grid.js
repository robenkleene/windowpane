var Screen = require("./screen");

var Grid = (function() {
  function Grid(horizontalBlocks, verticalBlocks) {
    this.horizontalBlocks = horizontalBlocks;
    this.verticalBlocks = verticalBlocks;
  }

  Grid.prototype.get = function(window) {
    var windowBounds = window.bounds();
    var screenBounds = Screen.bounds();
    
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