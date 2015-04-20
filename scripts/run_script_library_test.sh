#!/bin/sh

(browserify ../lib/window-manager.js --standalone WindowManager; echo; echo; cat ../lib/script-library-wrapper.js; echo; echo; cat ../tests/lib/test-script-library.js) | osascript -l JavaScript