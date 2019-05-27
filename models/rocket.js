"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketId, numThrusters, colorRocket, speedRocket, launchRocket) {
        this.thrustersArray = new Array();
        this.rocketId = rocketId;
        this.numThrusters = numThrusters;
        this.colorRocket = colorRocket;
        this.speedRocket = speedRocket;
        this.launchRocket = launchRocket;
    }
    // to add thrusters to the rocket object
    Rocket.prototype.addThruster = function (thrusterX) {
        this.thrustersArray.push(thrusterX);
    };
    // accelerate method, increase of 10 each thruster
    Rocket.prototype.accelerate = function (aRocket) {
        //increase by 10 the current thrust of each thruster but check its max thrust
        for (var i = 0; i <= aRocket.thrustersArray.length - 1; i++) {
            var thrustArr = aRocket.thrustersArray[i];
            if (thrustArr.currentThrust < aRocket.thrustersArray[i].thrustMaxPower) {
                thrustArr.currentThrust += 10;
            }
            else {
                console.log(thrustArr.thrusterId + ", " + thrustArr.currentThrust + "is the max thrust");
            }
        }
        var myjson = JSON.stringify(aRocket.thrustersArray);
        console.log("Thrust array " + myjson);
        speedOfRocket(aRocket);
        (rocket1) ? showRocket1Info() : false;
        (rocket2) ? showRocket2Info() : false;
        return aRocket.speedRocket;
    };
    //break method, decrease of 10 each thruster
    Rocket.prototype.breakRocket = function (aRocket) {
        for (var i = 0; i <= aRocket.thrustersArray.length - 1; i++) {
            var arrthrust = aRocket.thrustersArray[i];
            if (arrthrust.currentThrust > 0) {
                arrthrust.currentThrust -= 10;
                this.speedRocket -= 10;
            }
            else {
                console.log(arrthrust.thrusterId + ", " + arrthrust.currentThrust + "is the minimum thrust");
            }
            (rocket1) ? showRocket1Info() : false;
            (rocket2) ? showRocket2Info() : false;
        }
        var myjson = JSON.stringify(aRocket.thrustersArray);
        console.log("Thrust array " + myjson);
        speedOfRocket(aRocket);
        return aRocket.speedRocket;
    };
    // move rockets
    Rocket.prototype.moveRocket1 = function () {
        var elem = document.getElementById("rocketId1");
        var right = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (right >= 1800) {
                clearInterval(id);
            }
            else {
                right--;
                elem.style.position = right + 'px';
            }
        }
    };
    return Rocket;
}()); // end Rocket
