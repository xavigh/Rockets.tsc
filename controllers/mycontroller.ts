//define DOM id pointers
let rocket1Info = <HTMLElement>document.getElementById("rocket1Info");
let rocket2Info = <HTMLElement>document.getElementById("rocket2Info");

let rocketId1 = <HTMLElement>document.getElementById("rocketId1");
let rocketId2 = <HTMLElement>document.getElementById("rocketId2");

//rocket effects when click accelerate and break
let accelerateButton1 = <HTMLElement>document.getElementById("accelerateButton1");
let breakButton1 = <HTMLElement>document.getElementById("breakButton1");
let accelerateButton2 = <HTMLElement>document.getElementById("accelerateButton2");
let breakButton2 = <HTMLElement>document.getElementById("breakButton2");

// add event listeners to the buttons when click
accelerateButton1.addEventListener("click", changeColorAccelerate);
breakButton1.addEventListener("click",changeColorBreak);
accelerateButton2.addEventListener("click", changeColorAccelerate2);
breakButton2.addEventListener("click",changeColorBreak2);

// define Rockets
let rocket1: Rocket;
let rocket2: Rocket;

// define Thrusters
// rocket1 max thrust 10,30,80.
let thrusterRocket1_10: Thruster;
let thrusterRocket1_30: Thruster;
let thrusterRocket1_80: Thruster;

// rocket2 max thrust: 30,40,50,50,30,10). 
let thrusterRocket230: Thruster;
let thrusterRocket240: Thruster;


//create rockets
function createRocket1() {
    
    rocketId1.classList.remove("d-none");
    //object rocket id, num of Thrusters, color, speed, launched false/true, position
    rocket1 = new Rocket("32WESSDS", 3, "Red", 0, false, 0);
    let thrusterRocket1_10 = new Thruster("th0110", 10, 0);
    let thrusterRocket1_30 = new Thruster("th0130", 30, 0);
    let thrusterRocket1_80 = new Thruster("th0180", 80, 0);

    // add thruster to the Object rocket1 into the thrustersArray
    rocket1.addThruster(thrusterRocket1_10);
    rocket1.addThruster(thrusterRocket1_30);
    rocket1.addThruster(thrusterRocket1_80);

    showRocket1Info();
}

function createRocket2() {
    rocketId2.classList.remove("d-none");
    rocket2 = new Rocket("LDSFJA32", 6, "Blue", 0, false, 0);
    let thrusterRocket230 = new Thruster("th0230", 30, 0);
    let thrusterRocket240 = new Thruster("th40", 40, 0);
    let thrusterRocket250 = new Thruster("th250", 50, 0);
    let thrusterRocket250b = new Thruster("th250b", 50, 0);
    let thrusterRocket230b = new Thruster("th230b", 30, 0);
    let thrusterRocket210 = new Thruster("th210", 10, 0);


    rocket2.addThruster(thrusterRocket230);
    rocket2.addThruster(thrusterRocket240);
    rocket2.addThruster(thrusterRocket250);
    rocket2.addThruster(thrusterRocket250b);
    rocket2.addThruster(thrusterRocket230b);
    rocket2.addThruster(thrusterRocket210);

    showRocket2Info();

}

// get speed of Rocket.
function speedOfRocket(aRocket: Rocket) {
    aRocket.speedRocket = 0;

    for (var i = 0; i <= aRocket.thrustersArray.length - 1; i++) {
        if(aRocket.speedRocket >= 210 && aRocket.thrustersArray[i].currentThrust >= aRocket.thrustersArray[i].thrustMaxPower){
            aRocket.speedRocket = 0;
        }else{
            aRocket.speedRocket += aRocket.thrustersArray[i].currentThrust; 
        }

    }
    console.log("speed of rocket= " + aRocket.speedRocket);
        return aRocket.speedRocket;
    }
 
    function changeColorAccelerate():void{   
        rocketId1.classList.toggle("accelerate");
        
        
        
    
    }

    function changeColorBreak():void{
        rocketId1.classList.toggle("break");  
        

        
    
    }

    function changeColorAccelerate2():void{   
        
        rocketId2.classList.toggle("accelerate");
    
    
    }

    function changeColorBreak2():void{
        
        rocketId2.classList.toggle("break");
    }