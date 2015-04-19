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

  Grid.prototype.boundsForGridCoordinates = function(gridCoordinates) {
    var x = Math.round(gridCoordinates.x * this.blockWidth + this.screenBounds.x);
    var y = Math.round(gridCoordinates.y * this.blockHeight + this.screenBounds.y);
    var w = Math.round(gridCoordinates.width * this.blockWidth);
    var h = Math.round(gridCoordinates.height * this.blockHeight);
    return { x: x, y: y, width: w, height: h }    
  };

  Grid.prototype.validGridCoordinates = function(gridCoordinates) {
    gridCoordinates.x = Math.max(gridCoordinates.x, 0);
    gridCoordinates.x = Math.min(gridCoordinates.x, this.horizontalBlocks - gridCoordinates.width);
    gridCoordinates.y = Math.max(gridCoordinates.y, 0);
    gridCoordinates.y = Math.min(gridCoordinates.y, this.verticalBlocks - gridCoordinates.height);
    gridCoordinates.width = Math.max(gridCoordinates.width, 1)
    gridCoordinates.width = Math.min(gridCoordinates.width, this.horizontalBlocks - gridCoordinates.x)
    gridCoordinates.height = Math.max(gridCoordinates.height, 1)
    gridCoordinates.height = Math.min(gridCoordinates.height, this.verticalBlocks - gridCoordinates.y)
    return gridCoordinates;
  };

  return Grid;
})();
module.exports = Grid;