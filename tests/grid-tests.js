var TestsHelper = require('./lib/test-helper');

var Grid = require('../lib/grid');

function testConstructor() {
  var grid = new Grid(3, 3);
  TestsHelper.assert(grid.horizontalBlocks == 3, "The new grid should have three horizontal blocks");
  TestsHelper.assert(grid.verticalBlocks == 3, "The new grid should have three vertical blocks");
}

testConstructor();