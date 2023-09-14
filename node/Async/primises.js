// const promise = new Promise((resolve,reject)=>{
// console.log("Async task execution ");
// if(false){
//     const person={name:"veleswaran",}
//     resolve(person);
// }
// else{
//     const error ={errorCode:"500"};
//     reject(error);
// }
// })

// promise.then(
//     (val)=>{ console.log("passed",val)},
//     // (err)=>{console.log("failed" ,err)}
// ).catch((err)=> console.log("failed",err))
//     .finally(()=>{
//         console.log("clean up ")
//     })


//  //// differ with callback function 

//  let p= Promise.resolve("veleswearan");

//  p.then((val)=>{
//     console.log(val);
//  })

// // inthis code cannot run the callback function but promis is do this
// function async(callback){
//     return Promise.resolve();
// }

// async().then (()=> console.log(name));
// const name="veleswaran";

 // join the promises in node js

 const  p= Promise.resolve("done the task");

 p.then((val)=>{
    console.log(val);

    return "done3";
 })
 .then((val)=>{
    console.log(val);
    return "done 5";

 })
 .then((vel)=>   console.log(vel));