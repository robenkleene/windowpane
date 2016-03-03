# Window Manager

This is a port of [Mjolnir](https://github.com/sdegutis/mjolnir) written in OS X's [JavaScript for Automation](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1) feature introduced in Yosemite. The window manager [Hammerspoon](http://www.hammerspoon.org/) is a fork of Mjjolnir

The theory is that Mjolnir is three things:

1. It's a listener for keyboard shortcuts that correspond to window move commands.
2. Lua bindings for Cocoa's window accessibility features.
3. A set of Lua scripts that implement a grid-based window manager.

## Installation

Installing this window manager consists of three tedious steps:

1. Open Script Editor