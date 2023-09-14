// const error=new Error("Something is worng");
// console.log(error.stack);
// console.log(error.message);
// throw new Error("I an error object");

//  const cust= require(".customsError.js");
//  throw new cust("This as   ");
 
 const error= new Error("something is worng");
//  console.log(error.stack);
//  console.log(error.message);
//  throw new Error('I am error abject');

 //const { CustomError }= require("./CustomError");

 //throw new CustomError("This the customes error");

 // handle exception using try and catch

//  try{
//     doSomething();

//  }catch(e){
//     console.log("error occurred");
//     console.log(e);
//  }

 function doSomething(){
    const data=fetch("localhost:3000//"); 
 }

//  uncaught exception

process.on ("uncaughtException",(err)=>{
    console.log("there was an uncaught exception",err);
    process.exit(1);
});

doSomething();