// ==UserScript==
// @name         World Language Games Automation for "Millions" (Natural, Instant)
// @namespace    http://www.github.com/engel03455
// @downloadURL  https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Millions%20(Natural%2C%20Instant).user.js
// @updateURL    https://github.com/engel03455/Automation-for-World-Language-Games/raw/main/Game%20-%20Millions%20(Natural%2C%20Instant).user.js
// @version      1.2
// @description  This script will automatically launch and complete the game "Millions" on World Language Games, while adding a random duration between 1:00 and 3:59, and 0 to 4 wrong guesses.
// @author       http://www.github.com/engel03455
// @match        *://wlangames.net/PlayGame.php?Game=Millions4Pts.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

//location.href = "javascript:void(gotoCongrats());"

/*
Above is the command which completes the game.
It does record the time, so if your teacher sees that you played your games in 0 seconds,
they would be aufully suspicious. I've fixed this problem.
*/

(function() {
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gotoCongratsedit()
{

var cd = new Date();



if( document.PlayBingo.JulianTime.value == 0)
{
    document.PlayBingo.JulianTime.value = cd.getTime();




    // document.PlayBingo.pTimeCenter.value= document.getElementById("TimeCenter").innerHTML;
    var NumberOfWrongGuesses = getRandomInt(0,4)
    document.PlayBingo.pGuessLabel.value= ""+NumberOfWrongGuesses;

    var obj = document.getElementById("TotalMins");

    var mincount = getRandomInt(1,3);
    var seccount = getRandomInt(0,59);

    if(true){
        obj.value = mincount;
    }


    obj = document.getElementById("Minutes");
    if(true){
        obj.value = mincount;
    }

    obj = document.getElementById("TotalSecs");
    if(true){
        obj.value = seccount;
    }


    obj = document.getElementById("Seconds");
    if(true){
        obj.value = seccount;
    }


    obj = document.getElementById("pTimeCenter");
    if(seccount < 10){
        obj.value = ""+mincount+":0"+seccount;
    }
    else{
        obj.value = ""+mincount+":"+seccount;
    }

}
}

gotoCongratsedit();
})();
