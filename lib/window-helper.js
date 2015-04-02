
function frontmostApp() {
  var filtered = Application("System Events").processes.whose({ frontmost: true });
  return filtered[0];
}

exports.getFocusedWindow = function getFocusedWindow() {
  var frontmostApplication = frontmostApp();
  return frontmostApplication.windows[0];
}