class vehicle{
    productName;
    price;
    qundity;
    constructor(priductName,price,qundity){
        this.productName=priductName;
        this.price=price;
        this.qundity=qundity;
    }
    get(){
        console.log(this.productName,this.price,this.qundity);
    }
}
class bike extends vehicle{
    engine;
    constructor(productName,price,quntity){
        super(productName,price,quntity);
    }
}
const obj=new bike("yamaha",85000,5);
obj.get();