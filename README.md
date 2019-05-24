# Rockets.tsc
Exercise to practice Typescript using MVC architecture from IT Academy

# Pseudocode

Create Rocket Class{}
	//rocket properties:
	rocketId: string; ( 8 characters and a number of thrusters for each rocket)
	colorRocket:string;
	speedRocket:number; ( speed is the sum of all power thrusters );
	thrustersRocket:Thruster[] = new Array();
	launchRocket:boolean;

	
	// constructor of Rocket to create instances type Rocket
	constructor(rocketId:string,colorRocket:string, speedRocket:number ){
		this.rocketId = rocketId;
		this.color    = color; 	
	}
// create methods for the rocket
	accelerate(); (will add or substract 10)
	break (); ( will add or substract 10 fromt the power thrust)
	


// create Thruster class
// properties
Class Thruster{}
	thrustId:string;
	CurrentthrustsPower:number;
	thrustMaxPower:number;
	


	
