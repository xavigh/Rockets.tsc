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
    accelerate(): void {
        //increase by 10 the current thrust of each thruster but check its max thrust
        for (let i = 0; i <= this.thrustersArray.length - 1; i++) {
           
            if (this.thrustersArray[i].currentThrust < this.thrustersArray[i].thrustMaxPower) {
                this.thrustersArray[i].currentThrust += 10;
            }
            else {
                console.log(this.thrustersArray[i].thrusterId + ", " + this.thrustersArray[i].currentThrust + "is the max thrust");
            }
        }
        let myjson = JSON.stringify(this.thrustersArray);
        console.log("Thrust array " + myjson);
        
        speedOfRocket(this);
        this.moveRocket();

            (rocket1)? showRocket1Info() : false;
            (rocket2)? showRocket2Info() : false;   

        
    }


    //break method, decrease of 10 each thruster
    breakRocket(): number {
        for (let i = 0; i <= this.thrustersArray.length - 1; i++) {

            let arrthrust = this.thrustersArray[i];

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
        let myjson = JSON.stringify(this.thrustersArray);
        console.log("Thrust array " + myjson);
        var sp= speedOfRocket(this);
        this.moveRocket();
        return this.speedRocket;
    }

    // move rockets
    moveRocket(){
                  
        this.launchRocket = true;
        var id:number=0;
        
            
        if(this.launchRocket && this.speedRocket == 0){
            false;
          }else{
            var id = setInterval(frame() , 1);
          } 
            function frame(){

            var position = 0;      
            var speed = speedRocket/1000;      
          
            var elem1:HTMLElement= <HTMLElement>document.getElementById("rocketId1");
            var elem2:HTMLElement = <HTMLElement>document.getElementById("rocketId2");
            (rocket1)? elem1 = elem1: false;
            (rocket2)? elem2 = elem2: false;
      
                     
            if (position >= 800 || speedRocket == 0) {
                clearInterval(id);
                position = position;
                launchRocket = false;
    
            } else {  position++;    }                  
              
                
                (rocket1)? elem1.style.left =  this.position + 'px': false;
                (rocket2)? elem2.style.left =  this.position + 'px': false;
               
                
    }            
              
       
          

    }// end moveRocket()
   
    
    

    


    }// end Rocket