class products{
    name;
    price;
    id;
    count;
    constructor(name,price,count){
        this.name=name;
        this.price=price;
        this.count=count;
    }

    get details(){
        return this.name+','+this.price+','+this.count;

    }
}
class sale extends products{
    product=[];
    index=0;
    addProduct(product){
        this.product[this.index]=product;
     this.index++;
    }
    listProduct(){
        for(let i=0;i<this.index;i++){
            console.log(this.product[i].details);
        }
    }
}

let pro=new products('pencil',5,10);
pro1=new products('pen',5,20);
pro2=new products('color penciel',30,12);


let sal=new sale();
sal.addProduct(pro);
sal.addProduct(pro1);
sal.addProduct(pro2);
sal.listProduct();