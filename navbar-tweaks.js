// SPDX-License-Identifier: GPLv3-or-later
// Copyright © 2020 fvtt-navbar-tweaks Rui Pinheiro

'use strict';

import {libWrapper} from './shim.js';

Hooks.on('ready', () => {
	const MODULE_NAME = "Navbar Tweaks";
	const MODULE_ID = "navbar-tweaks";

	console.log(`Loading ${MODULE_NAME} module...`);


	//---------------------------
	// Settings
	const resetNavbar = function() {
		ui.nav.render(true);
	};

	game.settings.register(MODULE_ID, 'navbar-role', {
		name: 'Navigation Bar Minimum Role',
		default: 1,
		type: String,
		choices: {
			0: "Never show Navbar",
			1: "Always show Navbar",
			2: "Show Navbar to TRUSTED or higher",
			3: "Show Navbar to ASSISTANT or higher",
			4: "Show Navbar to GAMEMASTER only"
		},
		scope: 'world',
		config: true,
		hint: "Set a minimum role for the navigation bar to appear. Note that this does not hide the Navbar or scene name while the page is loading. Default is 'Always show Navbar'.",
		onChange: value => resetNavbar()
	});

	game.settings.register(MODULE_ID, 'nav-name-role', {
		name: "'Navigation Name' Maximum Role",
		default: 4,
		type: String,
		choices: {
			0: "Never show the 'Navigation Name'",
			1: "Show the 'Navigation Name' to PLAYER only",
			2: "Show the 'Navigation Name' to TRUSTED or lower",
			3: "Show the 'Navigation Name' to ASSISTANT or lower",
			4: "Always show the 'Navigation Name'"
		},
		scope: 'world',
		config: true,
		hint: "Role above which the navbar will always show the real name of the scene, instead of the 'Navigation Name' configured in the Scene settings. This is useful to avoid spoilers, while still allowing the GM to distinguish between scenes. For example, the players might just see 'City', but the GM sees 'City (before attack)', 'City (during attack)' and 'City (after attack)'. Default is 'Always show the Navigation Name'.",
		onChange: value => resetNavbar()
	});

	const getSetting = game.settings.get.bind(game.settings, MODULE_ID);


	//---------------------------
	// Hook SceneNavigation methods and implement the main module functionality
	libWrapper.register(MODULE_ID, 'SceneNavigation.prototype.render', function(wrapper, ...args) {
		const neededRole = parseInt(getSetting('navbar-role'));

		if(neededRole === 0 || neededRole && (neededRole >= 5 || !game.user.hasRole(neededRole))) {
			this.element.empty();
			return;
		}

		return wrapper.apply(this, args);
	});

	libWrapper.register(MODULE_ID, 'SceneNavigation.prototype.getData', function(wrapper, ...args) {
		let result = wrapper.apply(this, args);

		let navNameRole = parseInt(getSetting('nav-name-role'));

		if(Number.isInteger(navNameRole) && (navNameRole <= 0 || game.user.hasRole(navNameRole+1))) {
			result.scenes.forEach(data => {
				data.name = game.scenes.get(data._id).name;
			});
		}

		return result;
	}, 'WRAPPER');


	resetNavbar();
});

