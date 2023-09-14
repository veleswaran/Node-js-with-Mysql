// let functionVariable= function(){
//     console.log("there are no way to out");
// }
// functionVariable();
// function  doFlex(execute){
//     execute();
//     console.log("call backed");

// }
// doFlex(functionVariable);
// let youGotThis=function(){
//     console.log("you are so cricy");
// }
// setTimeout(youGotThis,5000);
// let a=function add(a,b){
//     console.log(a+b);
// }
// function sum(a){
//     console.log("the sum of the value");    
//     a(4,5);

// }
// setTimeout(function(){
//     sum(a);
// },1000);
let arr=[1,2,3,5,6,-5,-4,-6];
function regNeg(arr,callback){
    const myArray=[];
for(const x of arr){
    if(callback(x)){
        myArray.push(x);

    }
}
return myArray;
}
console.log(regNeg(arr,(x)=>x>=0));