
class dog{
    #dogName;
    #bread;
    constructor(dogName,bread){
        this.#dogName=dogName;
        this.#bread=bread;
    }
    details(){
        return this.#dogName+this.#bread;
        
    }
}
let obj=new dog("kave","chachite"); 
console.log(obj.details());   
console.log(obj.dogName);