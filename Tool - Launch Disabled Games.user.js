// ==UserScript==
// @name         World Language Games - Launch Disabled Games
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @version      2.0
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

(function() {
	var launcherConfig = {
		games: [
			window.SingleConcentration,
			window.DoubleConcentration,
			window.gotoPlayCarPuzzle,
		],
		prompt: "Which disabled game should be launched?\n\n" +
				"1 - Find'em\n" +
				"2 - Double Find'em\n" +
				"3 - Car Puzzle\n\n" +
				"Answering anything else will cancel."
	}

	function launcher(config){
		var gameIndex = parseInt(prompt(config.prompt)) - 1;
		if (gameIndex in config.games) config.games[gameIndex]();
	}
	
	document.onkeyup = function (e){
		e = e || window.event; // for IE to cover IEs window object
		if (e.altKey && e.which == 76) // ALT + L
			launcher(launcherConfig);
	}
})();
