class Rectangle{
    clacArea(){
         return this.h*this.w;
    }
    printData(){
        console.log("weigth = "+this.w);
        console.log("height = "+this.h);
        let area=this.clacArea();
        console.log(area);
    }

}
var result =new Rectangle();
result.w=5;
result.h=5;
result.printData();

// Getter
class Square{
    name;
    get area(){
        console.log('callint Getter');
        return this.side*this.side;
    }
    set firstName(name){
        if(name.startsWith("M")){
            this.name=name;
            
        }
        else{
            this.name='M'+name;
        }
    }
    get name1(){
        console.log(this.name);
    }
}
let squ=new Square();
squ.side=5;
squ.firstName="Murugan";
squ.name1;
console.log(squ.area);


