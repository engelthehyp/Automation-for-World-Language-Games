// ==UserScript==
// @name         World Language Games - Automation for "Millions" (DEFUNCT)
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Millions%20(Defunct).user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Millions%20(Defunct).user.js
// @version      2.0
// @description  This script will automatically launch and complete the game "Millions" on World Language Games, while adding a random duration between 1:00 and 3:59, and 0 to 4 wrong guesses. PLEASE NOTE - This script is defunct and was made for an older version of Millions that has since been updated.
// @author       http://www.github.com/engel03455
// @match        *://wlangames.net/PlayGame.php?Game=Millions4Pts.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==


/*
 * location.href = "javascript:void(gotoCongrats());"
 * 
 * Above is the command which completes the game.
 * It does record the time, so if your teacher sees that you played your games in 0 seconds,
 * they would be aufully suspicious. I've fixed this problem.
 */

(function() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	document.PlayBingo.JulianTime.value = new Date().getTime();

	var wrongGuessCount = getRandomInt(0,4);
	var minCount = getRandomInt(1,3);
	var secCount = getRandomInt(0,59);

	document.PlayBingo.pGuessLabel.value         = String(wrongGuessCount);
	document.getElementById("TotalMins").value   = minCount;
	document.getElementById("Minutes").value     = minCount;
	document.getElementById("TotalSecs").value   = secCount;
	document.getElementById("Seconds").value     = secCount;
	document.getElementById("pTimeCenter").value = String((secCount < 10) ?
		minCount + ":0" + secCount : minCount + ":" + secCount)
})();
