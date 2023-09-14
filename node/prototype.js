class person{
    constructor(firstname,last){
        this.firstname=firstname;
        this.last=last;
    }
    greet(){
        console.log("hi there!");
    }
}
person.prototype.introduce=function(){
    console.log("Hi ,I'm",this.firstname);
};
person.prototype.favoriteColor="green";
let p=new person("veleswaran","Nagaraj");
console.log(p.favoriteColor);
p.introduce();
p.greet();