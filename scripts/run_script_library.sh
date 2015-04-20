#!/bin/sh

(browserify ../lib/window-manager.js --standalone WindowManager; echo; echo; cat ../lib/script-library-wrapper.js) | osascript -l JavaScript