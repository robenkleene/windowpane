#!/bin/bash

(cat ../windowpane.js; browserify ../tests/tests.js) | osascript -l JavaScript
