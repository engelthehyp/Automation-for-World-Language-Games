// ==UserScript==
// @name         World Language Games - Allow Disabled Games
// @namespace    none
// @version      0.1
// @description  Allows disabled games to be launched from the menu
// @author       Andrew Engelmann
// @match        *wlangames.net/shuhuilin3.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// ==/UserScript==

//<label onclick="gotoPlayCarPuzzle();" style="width=100%;border:outset;font-size:14px;color:blue;">&nbsp;Car Puzzle (2 pts)&nbsp;</label>

//let matched = document.querySelectorAll("label[style='border:outset;font-size:14px;background-color:darkgrey;color:white;']");

/*
function playHook() {
    alert(1);
}

const eles = document.querySelectorAll("label[style='border:outset;font-size:14px;background-color:darkgrey;color:white;']");
eles.forEach(item => {
    item.onclick = playHook;
    item.style = "width=100%;border:outset;font-size:14px;color:blue;";
})
playHook();
*/

/*

Find 'Em - SingleConcentration();
Double Find 'Em - DoubleConcentration();
Car Puzzle - gotoPlayCarPuzzle();

*/
function playHook() {
    alert(1);
    var carpuzzlebutton = document.querySelectorAll("label[onclick='xgotoPlayCarPuzzle();']");
    var findembutton = document.querySelectorAll("label[onclick='xgotoPlayCarPuzzle();']");
}
(function(){
    //const eles = document.querySelectorAll("body > form#TheForm > font > table > tbody > tr > td > div#EarnPoints > table > tbody > tr > td > table > tbody > tr > td#EarnPointsDataArea > table.menu > tbody > tr > td > table > tbody > tr > td > label")
    const eles = document.querySelectorAll("body > form#TheForm > font > table > tbody > tr > td > div#EarnPoints > table > tbody > tr > td > table > tbody > tr > td#EarnPointsDataArea > table.menu")
    eles.forEach(item => {
        item.onclick = playHook;
        //item.style.background = "blue";
        item.style.color = "white";
    })
})();