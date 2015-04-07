var Grid = (function() {
  function Grid(horizontalBlocks, verticalBlocks, screenBounds) {
    this.horizontalBlocks = horizontalBlocks;
    this.verticalBlocks = verticalBlocks;
    this.screenBounds = screenBounds;
    this.blockWidth = this.screenBounds.width / this.horizontalBlocks
    this.blockHeight = this.screenBounds.height / this.verticalBlocks
  }

  Grid.prototype.nearestGridCoordinatesForBounds = function(bounds) {
    var gridCoordinates = {};
    gridCoordinates.x = Math.round((bounds.x - this.screenBounds.x) / this.blockWidth);
    gridCoordinates.y = Math.round((bounds.y - this.screenBounds.y) / this.blockHeight);
    gridCoordinates.width = Math.max(1, Math.round(bounds.width / this.blockWidth));
    gridCoordinates.height = Math.max(1, Math.round(bounds.height / this.blockHeight));
    return gridCoordinates;
  };


  Grid.prototype.adjustBounds = function(window, cell) {

  // function grid.set(win, cell, screen)
  //   local screenrect = screen:frame()
  //   local thirdscreenwidth = screenrect.w / grid.GRIDWIDTH
  //   local halfscreenheight = screenrect.h / grid.GRIDHEIGHT
  //   local newframe = {
  //     x = (cell.x * thirdscreenwidth) + screenrect.x,
  //     y = (cell.y * halfscreenheight) + screenrect.y,
  //     w = cell.w * thirdscreenwidth,
  //     h = cell.h * halfscreenheight,
  //   }
  //
  //   newframe.x = newframe.x + grid.MARGINX
  //   newframe.y = newframe.y + grid.MARGINY
  //   newframe.w = newframe.w - (grid.MARGINX * 2)
  //   newframe.h = newframe.h - (grid.MARGINY * 2)
  //
  //   win:setframe(newframe)
    
  }

  return Grid;
})();
module.exports = Grid;