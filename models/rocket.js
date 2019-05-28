"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketId, numThrusters, colorRocket, speedRocket, launchRocket, position) {
        this.thrustersArray = new Array();
        this.rocketId = rocketId;
        this.numThrusters = numThrusters;
        this.colorRocket = colorRocket;
        this.speedRocket = speedRocket;
        this.launchRocket = launchRocket;
        this.position = position;
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
        var sp = speedOfRocket(aRocket);
        rocket1.moveRocket1(sp);
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
        var sp = speedOfRocket(aRocket);
        rocket1.moveRocket1(sp);
        return aRocket.speedRocket;
    };
    // move rockets
    Rocket.prototype.moveRocket1 = function (speedRocket1) {
        var elem = document.getElementById("rocketId1");
        var pos = (rocket1.launchRocket) ? pos = rocket1.position : pos = 0;
        var speed = speedRocket1 / 1000;
        var id;
        (rocket1.launchRocket) ? false : id = setInterval(frame, 1);
        function frame() {
            if (pos >= 800 || speed == 0) {
                clearInterval(id);
                pos = pos;
            }
            else {
                pos += speed;
                rocket1.position = pos;
                elem.style.left = pos + 'px';
                speed = speedOfRocket(rocket1) / 1000;
            }
        }
        rocket1.launchRocket = true;
    };
    return Rocket;
}()); // end Rocket
