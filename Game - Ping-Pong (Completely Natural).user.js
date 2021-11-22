// ==UserScript==
// @name         World Language Games Automation for "Ping-Pong" (Completely Natural)
// @namespace    http://www.github.com/engel03455
// @version      1.3
// @description  Send the signal for correct answer no watter what answer is picked (Correct Answer, Wrong Answer, No Answer) and automatically ends the game once 32 to 35 vollies have been made.
// @author       http://www.github.com/engel03455
// @match        *://wlangames.net/PingPong.php*
// @icon         https://www.google.com/s2/favicons?domain=wlangames.net
// @grant        none
// ==/UserScript==

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckAnswer () {
    //if(CurrentAnswer == 0)
    //return(WrongAnswer);
    var obj = document.getElementById("Paddle"+CurrentAnswer);

    //if(obj != null)
    //if(obj.innerHTML == AnswerIs)
    return(WrongAnswer-1); // Correct Answer!

    //return(WrongAnswer);
    ShouldEndGame();
}

var naturalending = getRandomInt(32,34);
//alert(naturalending+" guesses will be made before the game is ended");

function ShouldEndGame () {
    var guesses = document.getElementById("Guesses");
    if (guesses >= naturalending) {
       return(WrongAnswer);
   }
}

addJS_Node (CheckAnswer);

function addJS_Node (text, s_URL, funcToRun, runOnLoad) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    if (runOnLoad) {
        scriptNode.addEventListener ("load", runOnLoad, false);
    }
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}
