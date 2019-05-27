"use strict";
function showRocket1Info() {
    rocket1Info.innerHTML = "Rocket id = " + rocket1.rocketId +
        ", number of Thrusters = " + rocket1.numThrusters +
        ", max thrust = (" + ("" + maxThrustArrIteration(rocket1.thrustersArray)) + ").";
    //*** here i have a question about the String Template forat how to use it a when as the String template can be change 
    //to leave the function itself and also works?? */
}
function showRocket2Info() {
    rocket2Info.innerHTML = "Rocket id = " + rocket2.rocketId + ", number of Thrusters = " + rocket2.numThrusters +
        ", max thrust = (" + ("" + maxThrustArrIteration(rocket2.thrustersArray)) + ").";
}
// QUESTION implicitly has an any type.
function maxThrustArrIteration(oneArr) {
    var arrThrustData = "";
    for (var i = 0; i <= oneArr.length - 1; i++) {
        if (i == oneArr.length - 1) { //we remove last comma here
            arrThrustData += oneArr[i].thrustMaxPower;
        }
        else {
            arrThrustData += oneArr[i].thrustMaxPower + ", ";
        }
    }
    return arrThrustData;
}
