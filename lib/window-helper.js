
function frontmostApp() {
  var filtered = Application("System Events").processes.whose({ frontmost: true });
  var appOne = filtered[0];
  // appOne.includeStandardAdditions = true
  return Application(appOne.name());
}

exports.getFocusedWindow = function getFocusedWindow() {
  var frontmostApplication = frontmostApp();
  return frontmostApplication.windows()[0];
}