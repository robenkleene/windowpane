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

  return Grid;
})();
module.exports = Grid;