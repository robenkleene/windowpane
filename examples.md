# Examples

Examples that use the [default config](windowpane-config.js), including suggested keyboard shortcuts.

Center (`⇧⌃⌥⌘↑`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.makeFocusedWindowCentered();

Full screen (`⇧⌃⌥⌘↓`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.makeFocusedWindowFullScreen();

Half Screen Left (`⇧⌃⌥⌘←`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.makeFocusedWindowHalfScreenLeft();

Half Screen Right (`⇧⌃⌥⌘→`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.makeFocusedWindowHalfScreenRight();

Move Down (`⌃⌥`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.moveFocusedWindowDown();

Move Left (`⌃⌥←`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.moveFocusedWindowLeft();

Move Right (`⌃⌥→`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.moveFocusedWindowRight();

Move Up (`⌃⌥↑`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.moveFocusedWindowUp();

Move Next Screen (`⌥Backtick`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.moveFocusedWindowToNextScreen();

Resize Down (`⌃⌥⌘↓`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.resizeFocusedWindowDown();

Resize Left (`⌃⌥⌘←`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.resizeFocusedWindowLeft();

Resize Right (`⌃⌥⌘→`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.resizeFocusedWindowRight();

Resize Up (`⌃⌥⌘↑`):

	WindowpaneConfig = Library('windowpane-config');
	WindowpaneConfig.resizeFocusedWindowUp();
