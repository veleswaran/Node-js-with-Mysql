// // call back function 


// console.log("Task start");
// function async(callback){
//     console.log(" Task running")
//     callback();
//     setTimeout(callback,10);

// }

// async(()=> console.log("veleswaran"))
// console.log("hi vele")


// // error handling in callback

// console.log("Task start");
// function async(callback){
//   setTimeout(()=>{
//     callback(null,"This is data")
//   },0);

// }

// async((err,data)=> {
//     if(err){ 
//         throw err;
//     }
// else{
//     console.log("veleswaran",data);
// }
// })
// console.log("hi vele")


function async(callback){
    setTimeout(()=>{
        callback(null,"this is the data");
    },10);
}

function makeApi(callback){
    setTimeout(()=>{
        console.log("this the Async task execution");
    },10);
    callback();
}

// call back hell
makeApi(()=>{
    makeApi(()=>{
        async(()=>{
            async(()=>{
                console.log("hi i am async ");
            })
        })
    })
})