class Rocket{
    //rocket properties
    //8 characters and a number of thrusters for each rocket
   
    rocketId:string;
    numThrusters:number;
    colorRocket:string;
    //speed is the sum of all power thrusters 
	speedRocket:number; 
	thrustersArray:Thruster[] = new Array();
	launchRocket:boolean;

    constructor(rocketId:string, numThrusters:number, colorRocket:string, speedRocket:number,launchRocket:boolean){
        this.rocketId = rocketId;
        this.numThrusters = numThrusters;
        this.colorRocket = colorRocket;
        this.speedRocket = speedRocket;
        this.launchRocket = launchRocket;
        
    }

    addThruster(thrusterX:Thruster):void{
        this.thrustersArray.push(thrusterX);
        
    }








}// end Rocket