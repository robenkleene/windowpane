#!/bin/bash

# (echo 'window = this;'; browserify ../tests/tests.js; echo ';ObjC.import("stdlib");$.exit(0)') | osascript -l JavaScript


browserify ../tests/tests.js | osascript -l JavaScript
