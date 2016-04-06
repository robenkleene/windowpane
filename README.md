# Windowpane

> *If you want to touch the sky* /<BR>
> *Just put a window in your eye*

Windowpane is a grid-based window manager written purely in OS X's [JavaScript for Automation](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1) feature introduced in OS X Yosemite 10.10.

<img src="assets/animation.gif" alt="Animation" height="510">

Unfortunately windows don't really animate smoothly like in the animation (but that would be awesome), instead they jump to their new location instantly.

## Inspiration

Windowpane is inspired by [Mjolnir](https://github.com/sdegutis/mjolnir). In fact, it's mainly just a port of the [mjolnir.sd.grid](https://luarocks.org/modules/sdegutis/mjolnir.sd.grid) Lua scripts to JavaScript. The scripts act as framework for positioning windows in the screen divided into horizontal rows and vertical columns.

## Prerequisites

To use Windowpane, you must have a keyboard shortcut listener that can trigger an AppleScript, and [access for assistive devices](https://support.apple.com/en-us/HT202866) must be enabled for it.

I personally use [FastScripts](https://red-sweater.com/fastscripts/) for this, but [Keyboard Maestro](https://www.keyboardmaestro.com/main/) or [Alfred](https://www.alfredapp.com/) should also work.

Theoretically OS X's built-in Services system should be able to act as a keyboard shortcut listener, but in practice it doesn't work because when Services run as the frontmost application, and therefore it can't manipulate window and size positions of windows unless access for assistive devices is enabled for every application.

## Installation

Installing Windowpane consists of three (tedious) steps:

1. Copy the source of the `windowpane.js` file into a new [Script Editor](https://developer.apple.com/library/mac/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/GettoKnowScriptEditor.html) document.
2. In Script Editor, set the language type to JavaScript.


## Script Libraries

## Configuration

Windowpane has two components

## Keyboard Shortcuts

I recommend avoiding the arrow keys for keyboard shortcuts, because it's almost difficult to avoid important built-in shortcuts, e.g., arrow keys with `⌃` conflict with switching spaces, and `⌥` and `⌘` conflict with basic text navigation.

## Tests

Running tests will close, open, and move Finder windows. In other words, don't run them if you have your Finder windows in a state you want to preserve.

When running tests from the Terminal, you'll have to enabled assistive access for the Terminal application (when running GUI scripting from the command line it's the Terminal application itself that needs the privileges).

## Caveats

Re-saving is necessary for library changes to take place.
