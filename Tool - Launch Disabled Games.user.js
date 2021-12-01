// ==UserScript==
// @name         World Language Games - Launch Disabled Games
// @license      MIT
// @namespace    https://github.com/engel03455/
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Launch%20Disabled%20Games.user.js
// @version      1.2
// @description  Allows you to launch disabled games by pressing the ALT + L keyboard shortcut on the World Language Games homepage.
// @author       https://github.com/engel03455/
// @match        *://wlangames.net/*
// @exclude      *://wlangames.net/PlayGame.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-start
// ==/UserScript==

//Find 'Em - SingleConcentration();
//Double Find 'Em - DoubleConcentration();
//Car Puzzle - gotoPlayCarPuzzle();

(function() {
	function launcher(){
		var GameToLaunch = prompt("Which disabled game should be launched?\n\n0 - Cancel\n1 - Find'em\n2 - Double Find'em\n3 - Car Puzzle\n\nAnswering blank or anything else will also cancel.");
		
		if (GameToLaunch == 0) {
    		//DO NOTHING
		}
		else if (GameToLaunch == 1) {
    		SingleConcentration(); //Launches "Find'em"
		}
		else if (GameToLaunch == 2) {
    		DoubleConcentration(); //Launches "Double Find'em"
		}
		else if (GameToLaunch == 3) {
    		gotoPlayCarPuzzle(); //Launches "Car Puzzle"
		}
		else {
    		//DO NOTHING
    		//alert("Please send a valid response. Exiting...");
		}
	}
    document.onkeyup=function(e){
	e = e || window.event; // for IE to cover IEs window object
    if(e.altKey && e.which == 76) {
        //alert('Keyboard shortcut working!');
        launcher();
        return false;
    }
}
}
})();
