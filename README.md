# FVTT Navbar Tweaks
Module for Foundry VTT that provides some tweaks for the navbar.

[![License](https://img.shields.io/github/license/ruipin/fvtt-navbar-tweaks)](LICENSE)
[![Build Release](https://github.com/ruipin/fvtt-navbar-tweaks/workflows/Build%20Release/badge.svg)](https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest)
[![Version (latest)](https://img.shields.io/github/v/release/ruipin/fvtt-navbar-tweaks)](https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest/download/module.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=blueviolet)](https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest)
[![GitHub downloads (latest)](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets[?(@.name.includes('zip'))].download_count&url=https://api.github.com/repos/ruipin/fvtt-navbar-tweaks/releases/latest&color=green)](https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest)
[![Forge Install Base](https://img.shields.io/badge/dynamic/json?label=Forge%20Install%20Base&query=package.installs&suffix=%&url=https://forge-vtt.com/api/bazaar/package/navbar-tweaks&colorB=brightgreen)](https://forge-vtt.com/)
[![GitHub issues](https://img.shields.io/github/issues-raw/ruipin/fvtt-navbar-tweaks)](https://github.com/ruipin/fvtt-navbar-tweaks/issues)
[![Ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coffee-%23FF5E5B?logo=Ko-fi&logoColor=white)](https://ko-fi.com/ruipin)


## Features

* Allows hiding the navbar for all players below a specific role. This can be used by the GM to hide the current scene name from players. Note that this does not hide the Navbar or scene name while the page is loading.

* Allows configuring the role above which the navbar will always show the real name of the scene, instead of the 'Navigation Name' configured in the Scene settings. This is useful to avoid spoilers, while still allowing the GM to distinguish between similar scenes. For example, the players might just see 'City', but the GM sees 'City (before attack)', 'City (during attack)' and 'City (after attack)'.


## Installation
1. Copy this link and use it in Foundry's Module Manager to install the Module

    > https://github.com/ruipin/fvtt-navbar-tweaks/releases/latest/download/module.json

2. Enable the Module in your World's Module Settings


### libWrapper

This module uses the [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper) library for wrapping core methods. While this is not a hard dependency, it is recommended to install it for the best experience and compatibility with other modules.