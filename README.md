# Windowpane

> *If you want to touch the sky* /<BR>
> *Just put a window in your eye*

Windowpane is a grid-based window manager written purely in OS X's [JavaScript for Automation](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1) feature introduced in Yosemite.

This approach to window management was greatly inspired by the [Mjolnir](https://github.com/sdegutis/mjolnir), in fact, it's mainly just a port of the [mjolnir.sd.grid Lua scripts](https://luarocks.org/modules/sdegutis/mjolnir.sd.grid). The scripts divide the screen into `X` and `Y` horizontal and vertical divisions, and then provide for a given converting from simple grid coordinates (e.g., `x = 2, y = 2, width = 2, height = 2`).

The window manager [Hammerspoon](http://www.hammerspoon.org/) is a fork of Mjjolnir

The theory is that Mjolnir is three things:

1. It's a listener for keyboard shortcuts that correspond to window move commands.
2. Lua bindings for Cocoa's window accessibility features.
3. A set of Lua scripts that implement a grid-based window manager.

## Tests

Running tests will close, open, and move Finder windows. In other words, don't run them if you have your Finder windows in a state you want to preserve.

When running tests from the Terminal, you'll have to enabled assistive access for the Terminal application (when running GUI scripting from the command line it's the Terminal application itself that needs the privileges).

## Installation

Installing this window manager consists of three tedious steps:

1. Open Script Editor

## Suggested Shortcuts

## Caveats

Re-saving is necessary for library changes to take place.
