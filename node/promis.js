// const pi=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve(val+30);

// },1000);
// });
// pi.then((x)=>x+20),then(console.log)
// let pi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(val + 30);
//     }, 1000);
//   });
  
//   pi.then((x) => x + 20).then(console.log).catch(console.error);
const myPromise = new Promise((resolve, reject) => {    
    let condition=-9;    
      
    if(condition<0) {      
        resolve('Promise is resolved successfully and then() menthod will be called');    
    } else {      
        reject('Promise is rejected and catch() medhod will be called');    
    }  
});  
    
  myPromise.then(console.log).catch( console.log);