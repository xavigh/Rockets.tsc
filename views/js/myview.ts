
//define DOM id pointers
let rocket1Info = <HTMLElement>document.getElementById("rocket1Info");
let rocket2Info =  <HTMLElement>document.getElementById("rocket2Info");


// define Rockets
let rocket1:Rocket;
let rocket2:Rocket;
// define Thrusters
// rocket1 max thrust 10,30,80.
let thrusterRocket1_10:Thruster;
let thrusterRocket1_30:Thruster;
let thrusterRocket1_80:Thruster;

// rocket2 max thrust: 30,40,50,50,30,10). 
let thrusterRocket230:Thruster;
let thrusterRocket240:Thruster;


//create rockets
function createRocket1(){
    //object rocket id, num of Thrusters, color, speed, launched false/true.
    rocket1 = new Rocket("32WESSDS", 3, "Blue", 0 , false);
    const thrusterRocket1_10 = new Thruster("th0110", 10);
    const thrusterRocket1_30 = new Thruster("th0130", 30);
    const thrusterRocket1_80 = new Thruster("th0180", 80);

    // add thruster to the Object rocket1 into the thrustersArray
    rocket1.addThruster(thrusterRocket1_10);
    rocket1.addThruster(thrusterRocket1_30);
    rocket1.addThruster(thrusterRocket1_80);
    
    showRocket1Info();

}

function createRocket2(){
    rocket2 = new Rocket("LDSFJA32", 6 , "red", 0, false);
    const thrusterRocket230 = new Thruster("th0230", 30);
    const thrusterRocket240 = new Thruster("th40", 40);
    const thrusterRocket250 = new Thruster("th250", 50);
    const thrusterRocket250b = new Thruster("th250b", 50);
    const thrusterRocket230b = new Thruster("th230b", 30);
    const thrusterRocket210 = new Thruster("th210", 10);


    rocket2.addThruster(thrusterRocket230);
    rocket2.addThruster(thrusterRocket240);
    rocket2.addThruster(thrusterRocket250);
    rocket2.addThruster(thrusterRocket250b);
    rocket2.addThruster(thrusterRocket230b);

    showRocket2Info();

}

function showRocket1Info(){

    rocket1Info.innerHTML = "Rocket id = " + rocket1.rocketId +
     ", number of Thrusters = "+ rocket1.numThrusters+
     ", max thrust = (" + `${maxThrustArrIteration(rocket1.thrustersArray) }`+ ").";


}

function showRocket2Info(){
    rocket2Info.innerHTML = "Rocket id = " + rocket2.rocketId + ", number of Thrusters = "+ rocket2.numThrusters;

}

function maxThrustArrIteration(oneArr){
    var arrThrustData:string= "";
    for(var value of oneArr){
        console.log(value.thrustMaxPower);
         arrThrustData += value.thrustMaxPower+", ";
    }
    return arrThrustData;
}