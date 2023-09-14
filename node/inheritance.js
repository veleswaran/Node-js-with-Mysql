class vehicle{
    constructor(color,currentSpeed,maxSpeed){
        this.color=color;
        this.currentSpeed=currentSpeed;
        this.maxSpeed=maxSpeed;
    }
    move(){
        console.log(" the vehicle move at  ",this.currentSpeed);
    }
    accelerate(amount){
        this.currentSpeed+=amount;
    }
}
class motorCycle extends vehicle{
    constructor(color,currentSpeed,fuel){
        super(color,currentSpeed);
        this.fuel=fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel!");
    }
}
let obj=new motorCycle("black",0,250,"gasoline");
console.log(obj.color);
obj.accelerate(50);
obj.move();