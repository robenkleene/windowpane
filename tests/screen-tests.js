var TestsHelper = require('./lib/test-helper.js');

var Screen = require('../lib/screen.js');

function testBounds() {
  var bounds = Screen.bounds();

  TestsHelper.assert(Object.keys(bounds).length == 4, "The screen's bounds should have four values.");

  for (var key in bounds) {
    var value = bounds[key];
    TestsHelper.assert(value > 0, "Every value of the screen's bounds.");
  }
}

testBounds();