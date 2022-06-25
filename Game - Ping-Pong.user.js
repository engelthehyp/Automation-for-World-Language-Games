// ==UserScript==
// @name         World Language Games - Automation for "Ping-Pong" (Completely Natural)
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Ping-Pong.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Ping-Pong.user.js
// @version      2.0
// @description  Sends the signal for correct answer no matter what answer is picked (Correct Answer, Wrong Answer, No Answer) and automatically ends the game once 32 to 35 vollies have been made.
// @author       http://www.github.com/engel03455
// @match        *://wlangames.net/PingPong.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var naturalEnding = getRandomInt(32, 35);
	
	window.CheckAnswer = function() {
		var guesses = document.getElementById("Guesses").innerHTML;
		return (parseInt(guesses) >= naturalEnding) ?
			(window.WrongAnswer) : (window.WrongAnswer - 1);
	}
})();
