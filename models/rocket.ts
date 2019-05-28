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
    position:number;

    constructor(rocketId: string, numThrusters: number, colorRocket: string, speedRocket: number, launchRocket: boolean, position:number) {
        this.rocketId = rocketId;
        this.numThrusters = numThrusters;
        this.colorRocket = colorRocket;
        this.speedRocket = speedRocket;
        this.launchRocket = launchRocket;
        this.position = position;

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
        
        var sp = speedOfRocket(aRocket);
        rocket1.moveRocket(aRocket);

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
        var sp= speedOfRocket(aRocket);
        aRocket.moveRocket(aRocket);
        return aRocket.speedRocket;
    }

    // move rockets
    moveRocket(aRocket:Rocket){
      
            var spaceShip1 = <HTMLElement>document.getElementById("rocketId1");
            var spaceShip2 = <HTMLElement>document.getElementById("rocketId2");
            var elem1:HTMLElement;
            var elem2:HTMLElement;
            (rocket1)? elem1 = spaceShip1: false;
            (rocket2)? elem2 = spaceShip2: false;

            var pos:number = (aRocket.launchRocket)? pos = aRocket.position : pos = 0;
            let speed = aRocket.speedRocket/1000;
           var id:number;
            (aRocket.launchRocket && speed == 0)? false : id = setInterval(frame, 1);

            function frame() {
                    if (pos >= 800 || speed == 0) {
                        clearInterval(id);
                        pos = pos;
                    } else {                       
                        pos+= speed; 
                        aRocket.position = pos;
                       (rocket1)? elem1.style.left =  pos + 'px': false;
                       (rocket2)? elem2.style.left =  pos + 'px': false;
                        speed = speedOfRocket(aRocket) / 1000;
                    }
            }       
            aRocket.launchRocket = true;
    }





}// end Rocket