// ==UserScript==
// @name         World Language Games - Launch Disabled Games
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @version      2.1
// @description  Allows you to launch disabled games by pressing the ALT + L keyboard shortcut on the World Language Games homepage.
// @author       https://github.com/engel03455/
// @match        *://wlangames.net/*
// @exclude      *://wlangames.net/PlayGame.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

/*
 * Find 'Em        - SingleConcentration();
 * Double Find 'Em - DoubleConcentration();
 * Car Puzzle      - gotoPlayCarPuzzle();
 */

(function () {
	"use strict";
	class NamedValue {
		constructor(name, value) {
			this.name = name;
			this.value = value;
		}

		toString() {
			return this.name;
		}
	}

	const games = [
		new NamedValue("Find 'Em", window.SingleConcentration),
		new NamedValue("Double Find 'Em", window.DoubleConcentration),
		new NamedValue('Car Puzzle', window.gotoPlayCarPuzzle),
	];

	const launcherConfig = {
		games: games,
		prompt:
			'Which disabled game should be launched?' +
			'\n\n' +
			games
				.map((item, index) => `${index + 1} - ${item}`)
				.join('\n') +
			'\n\n' +
			'Answering anything else will cancel.',
	};

	function launcher(config) {
		const gameIndex = parseInt(prompt(config.prompt)) - 1;
		config.games[gameIndex]?.value();
	}

	document.onkeyup = function (e) {
		e = e || window.event; // for IE to cover IEs window object
		if (e.altKey && e.which == 76)
			// ALT + L
			launcher(launcherConfig);
	};
})();
