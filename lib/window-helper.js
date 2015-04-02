
function frontmostApp() {
  var filtered = Application("System Events").processes.whose({ frontmost: true });
  var appOne = filtered[0];
  var app = Application(appOne.name());
  // app.includeStandardAdditions = true
  return app
}

exports.getFocusedWindow = function getFocusedWindow() {
  var frontmostApplication = frontmostApp();
  return frontmostApplication.windows()[0];
}