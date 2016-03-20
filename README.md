# Window Manager

A grid-based window manager written purely in OS X's [JavaScript for Automation](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1) feature introduced in Yosemite.

## Inspiration

This approach to window management was inspired by the [Mjolnir](https://github.com/sdegutis/mjolnir). In particular, it's mainly a port of the [mjolnir.sd.grid](https://luarocks.org/modules/sdegutis/mjolnir.sd.grid) Lua scripts. These scripts divide the screen into `X` horizontal divisions, and `Y` vertical divisions, and provide window sizes for a given converting from simple grid coordinates (e.g., `x = 2, y = 2, width = 2, height = 2`).

The window manager [Hammerspoon](http://www.hammerspoon.org/) is a fork of Mjjolnir

The theory is that Mjolnir is three things:

1. It's a listener for keyboard shortcuts that correspond to window move commands.
2. Lua bindings for Cocoa's window accessibility features.
3. A set of Lua scripts that implement a grid-based window manager.

## Installation

Installing this window manager consists of three tedious steps:

1. Open Script Editor

## Suggested Shortcuts

## Caveats

Re-saving is necessary for library changes to take place.
