#!/bin/bash

(cat ../window-manager.js; browserify ../tests/tests.js) | osascript -l JavaScript