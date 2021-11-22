// ==UserScript==
// @name         World Language Games - Launch Disabled Games from Context Menu
// @namespace    https://github.com/engel03455/
// @downloadURL  
// @updateURL    
// @version      1.1
// @description  Allows you to launch disabled games from the context menu.
// @author       https://github.com/engel03455/
// @match        *://wlangames.net/*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       context-menu
// ==/UserScript==

//Find 'Em - SingleConcentration();
//Double Find 'Em - DoubleConcentration();
//Car Puzzle - gotoPlayCarPuzzle();

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
