
function frontmostApp() {
  var filtered = Application("System Events").processes.whose({ frontmost: true });
  var appOne = filtered[0];
  var app = Application(appOne.name());
  // app.includeStandardAdditions = true
  return app
}

exports.getFocusedWindow = function getFocusedWindow() {
  var frontmostApplication = frontmostApp();
  var windowOne = frontmostApplication.windows()[0];
  if (typeof windowOne == 'undefined') {
    return null;
  }
  return windowOne;
}