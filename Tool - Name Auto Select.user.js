// ==UserScript==
// @name         World Language Games - Name Auto Select
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Name%20Auto%20Select.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Tool%20-%20Name%20Auto%20Select.user.js
// @version      1.0
// @description  Automatically selects your name on the World Language Games homepage. You will have to set the number index of your name manually, but only once.
// @author       https://github.com/engel03455/
// @match        *://wlangames.net/*
// @exclude      *://wlangames.net/PlayGame.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

// TO FIND THE INDEX:
// Start counting at 0.
// For every name in the dropdown, add 1. (Including the "Enter your name" and "Special guest" options)
// Stop when you get to your name. That number is the index.

nameIndex = 0; // Enter the index of your name here.

(function() {
	document.getElementById("Student").selectedIndex = nameIndex;
})();
