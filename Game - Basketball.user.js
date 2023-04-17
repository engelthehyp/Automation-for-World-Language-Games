// ==UserScript==
// @name         World Language Games - Automation for "Basketball"
// @license      MIT
// @namespace    https://github.com/engel03455/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Basketball.user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Basketball.user.js
// @version      1.1
// @description  This script will automatically complete the game "Basketball" as soon as it is launched, giving the maximum of 4 points.
// @author       http://www.github.com/engel03455
// @match        *://wlangames.net/Basketball2.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
	'use strict';

	window.TotalPoints = 36;
	window.GotoCongratulations();
})();
