exports.assert = function(condition, message) {
  if (!condition) {
    message = message || "Assertion failed";
    if (typeof Error !== "undefined") {
        throw new Error(message);
    }
    throw message;
  }
};

exports.frameEqualsFrame = function(frame1, frame2) {
  return (
    frame1.x == frame2.x &&
    frame1.y == frame2.y &&
    frame1.width == frame2.width &&
    frame1.height == frame2.height
  );
};

// Debug

exports.logFrame = function(frame) {
  console.log("x = " + frame.x);
  console.log("y = " + frame.y);
  console.log("width = " + frame.width);
  console.log("height = " + frame.height);
};