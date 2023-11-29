// ==UserScript==
// @name         World Language Games - Automation for "Basketball"
// @license      MIT
// @namespace    https://github.com/engelthehyp/Automation-for-World-Language-Games
// @downloadURL  https://github.com/engelthehyp/Automation-for-World-Language-Games/raw/main/Game%20-%20Basketball.user.js
// @updateURL    https://github.com/engelthehyp/Automation-for-World-Language-Games/raw/main/Game%20-%20Basketball.user.js
// @description  This script will automatically complete the game "Basketball" as soon as it is launched, giving the maximum of 3 points by default. You can change the number of points given to be any number, but under normal circumstances the maximum number of points is 3, so if you don't want to blow your cover, it may be better keep it that way. PLEASE NOTE - This script is defunct and was made for an older version of Basketball that has since been updated.
// @version      0.1
// @author       http://www.github.com/engelthehyp
// @match        *://wlangames.net/NewBasketball.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

// TODO: "Info" column in check points using this method reads "	   undefined undefined   	". I will have to find a solution to that.
(function() {
    'use strict';

    [window.minutes, window.seconds] = [getRandomInt(1, 3), getRandomInt(0, 59)];
    window.OneSecond();
    window.SpaceAdventuresSentenceGetServerKeys(3);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();