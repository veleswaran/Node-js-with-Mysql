class person{
    #name;
    #phoneNumber;
    constructor(name,phone){
        this.#name=name;
        this.#phoneNumber=phone;
    }
    get name1(){
        return this.#name;
    }
    set phoneNumber(phone){
    this.#phoneNumber=phone;
    }
    get phone(){
        return this.#phoneNumber;
    }
}
let obj=new person("veleswaran",9655379781);
obj.phoneNumber=9361172225;
console.log(obj.phone)
