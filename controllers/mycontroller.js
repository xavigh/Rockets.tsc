"use strict";
//define DOM id pointers
var rocket1Info = document.getElementById("rocket1Info");
var rocket2Info = document.getElementById("rocket2Info");
var rocketId1 = document.getElementById("rocketId1");
var rocketId2 = document.getElementById("rocketId2");
// define Rockets
var rocket1;
var rocket2;
// define Thrusters
// rocket1 max thrust 10,30,80.
var thrusterRocket1_10;
var thrusterRocket1_30;
var thrusterRocket1_80;
// rocket2 max thrust: 30,40,50,50,30,10). 
var thrusterRocket230;
var thrusterRocket240;
//create rockets
function createRocket1() {
    //object rocket id, num of Thrusters, color, speed, launched false/true, position
    rocket1 = new Rocket("32WESSDS", 3, "Red", 0, false, 0);
    var thrusterRocket1_10 = new Thruster("th0110", 10, 0);
    var thrusterRocket1_30 = new Thruster("th0130", 30, 0);
    var thrusterRocket1_80 = new Thruster("th0180", 80, 0);
    // add thruster to the Object rocket1 into the thrustersArray
    rocket1.addThruster(thrusterRocket1_10);
    rocket1.addThruster(thrusterRocket1_30);
    rocket1.addThruster(thrusterRocket1_80);
    showRocket1Info();
}
function createRocket2() {
    rocket2 = new Rocket("LDSFJA32", 6, "Blue", 0, false, 0);
    var thrusterRocket230 = new Thruster("th0230", 30, 0);
    var thrusterRocket240 = new Thruster("th40", 40, 0);
    var thrusterRocket250 = new Thruster("th250", 50, 0);
    var thrusterRocket250b = new Thruster("th250b", 50, 0);
    var thrusterRocket230b = new Thruster("th230b", 30, 0);
    var thrusterRocket210 = new Thruster("th210", 10, 0);
    rocket2.addThruster(thrusterRocket230);
    rocket2.addThruster(thrusterRocket240);
    rocket2.addThruster(thrusterRocket250);
    rocket2.addThruster(thrusterRocket250b);
    rocket2.addThruster(thrusterRocket230b);
    rocket2.addThruster(thrusterRocket210);
    showRocket2Info();
}
function speedOfRocket(aRocket) {
    aRocket.speedRocket = 0;
    for (var i = 0; i <= aRocket.thrustersArray.length - 1; i++) {
        aRocket.speedRocket += aRocket.thrustersArray[i].currentThrust;
    }
    console.log("speed of rocket= " + aRocket.speedRocket);
    return aRocket.speedRocket;
}
