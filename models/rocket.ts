class Rocket {
    //rocket properties
    //8 characters and a number of thrusters for each rocket

    rocketId: string;
    numThrusters: number;
    colorRocket: string;
    //speed is the sum of all power thrusters 
    speedRocket: number;
    thrustersArray: Thruster[] = new Array();
    launchRocket: boolean;

    constructor(rocketId: string, numThrusters: number, colorRocket: string, speedRocket: number, launchRocket: boolean) {
        this.rocketId = rocketId;
        this.numThrusters = numThrusters;
        this.colorRocket = colorRocket;
        this.speedRocket = speedRocket;
        this.launchRocket = launchRocket;

    }
    // to add thrusters to the rocket object
    addThruster(thrusterX: Thruster): void {
        this.thrustersArray.push(thrusterX);
    }
    // accelerate method, increase of 10 each thruster
    accelerate(aRocket: Rocket): number {
        //increase by 10 the current thrust of each thruster but check its max thrust
        for (let i = 0; i <= aRocket.thrustersArray.length - 1; i++) {
            let thrustArr = aRocket.thrustersArray[i];

            if (thrustArr.currentThrust < aRocket.thrustersArray[i].thrustMaxPower) {
                thrustArr.currentThrust += 10;
            }
            else {
                console.log(thrustArr.thrusterId + ", " + thrustArr.currentThrust + "is the max thrust");
            }
        }
        let myjson = JSON.stringify(aRocket.thrustersArray);
        console.log("Thrust array " + myjson);

        speedOfRocket(aRocket);

            (rocket1)? showRocket1Info() : false;
            (rocket2)? showRocket2Info() : false;   
        return aRocket.speedRocket;
    }


    //break method, decrease of 10 each thruster
    breakRocket(aRocket: Rocket): number {
        for (let i = 0; i <= aRocket.thrustersArray.length - 1; i++) {

            let arrthrust = aRocket.thrustersArray[i];

            if (arrthrust.currentThrust > 0) {
                arrthrust.currentThrust -= 10;
                this.speedRocket -= 10;
            }
            else {
                console.log(arrthrust.thrusterId + ", " + arrthrust.currentThrust + "is the minimum thrust");
            }
            (rocket1)? showRocket1Info() : false;
            (rocket2)? showRocket2Info() : false;   
            
        }
        let myjson = JSON.stringify(aRocket.thrustersArray);
        console.log("Thrust array " + myjson);
        speedOfRocket(aRocket);
        return aRocket.speedRocket;
    }

    // move rockets
    moveRocket1(){
       
            var elem = <HTMLElement>document.getElementById("rocketId1"); 
            var right= 1 ;

            var id = setInterval(frame, 10);
            function frame() {
              if (right >= 1800) {
                clearInterval(id);
              } else {
                right--; 
                elem.style.position =  right + 'px'; 
              }
            }
    }





}// end Rocket