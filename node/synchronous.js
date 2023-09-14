let add=(function(t){
    console.log("hi  "+t);
});
function add1(a,b,sum){
    let d=a+b;
    sum(d);
}
let to=(a,b,add1)=>{
    let c=a-5;
    add1(a,c,add);
}
to(5,10,add1);