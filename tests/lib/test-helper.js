exports.assert = function(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
}

exports.boundsEqualsBounds = function(bounds1, bounds2) {
  return (
    bounds1.x == bounds2.x &&
    bounds1.y == bounds2.y &&
    bounds1.width == bounds2.width &&
    bounds1.height == bounds2.height
  );
}

// Debug
exports.logBounds = function(bounds) {
    console.log("x = " + bounds.x);
    console.log("y = " + bounds.y);
    console.log("width = " + bounds.width);
    console.log("height = " + bounds.height);
}