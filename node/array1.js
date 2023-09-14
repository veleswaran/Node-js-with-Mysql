// const name=['veleswaran','savitha'];


// let arr=name.map(name1=>'name:'+name1);
// console.log(arr);

// // array refference
// const habbis=['Sports','Cooking '];
// //copy of the array
// //const habbis1=habbis.slice();
// // onother way
//// spred oparator (... file on array or object)
// const habbis1=[...habbis];
// habbis1.push('veleswaran');

// console.log(habbis);
// console.log(habbis1);
// const obj={name:'veleswaran',phone:9361172225};
// const obj1={...obj,email:"vels344@gamil.com"};
// console.log(obj1);
//REST oparetor (... args name function paramere)

// const vel=((...args)=>{
//     return args;

// });
// console.log(vel(1,2,3,4,5,6));
////Destructuring
// const person={name:'veleswaran',age:27};
// //// const name=person.name;// const{name}=person;
// // //const age=person.age;
// const{name,age}=person;

// console.log(name,age);
// //destructuring in array
// const name=['veleswaran','savithadevi'];
// const [h,h1]=name;
// console.log(h,h1);


// //Asynchronous code (javascript to execute timed function after execute not timed function or arguments)
// setTimeout(()=>{
//     console.log('Timer is done;')
// },2000); 
// console.log("hi veleswaran");

// const fetchDate=((callback)=>{
   
//     setTimeout(()=>{
//         callback("function executed ");
//     },3000);
// });
 
// setTimeout(()=>{
//     fetchDate((mess)=>{
//         console.log("data is fetched",mess);
//     })
// },2000);

//Promise like a if else (API)
// let mypro=new Promise((myResolve,myreject)=>{
//     myResolve('veleswaran');
//     myreject();

// });
// mypro.then((a)=>{
//     console.log('sucess',a);
// }).catch(()=>{
//     console.log('failed');
// })

const http = require('http');
const file=require('fs');
//  function reListener(req,res){
//     console.log(req);
//  } 
// const server=http.createServer(reListener);
// server.listen(3308);

// const server=http.createServer((req,res)=>{
//    console.log(req);
//    process.exit();
// });
// server.listen(3308);

// const server=http.createServer((req,res)=>{
//    // console.log(req.url);
//    // console.log(req.method);
//    console.log(req.headers);

// });
// server.listen(3308);


//// response
const server=http.createServer((req,res)=>{
   const url=req.url;
   const method=req.method;
   if(url==='/'){
      res.setHeader('content-type','text/html');
      res.write("<html>")
      res.write("<head>")
      res.write("<title>form</title>")
      res.write("<head>")
      res.write("<body>")
      res.write("<form action='/message' method='post'><input type='text'>");
      res.write("<input type='submit'>");
      res.write("</form>")
      res.write("</body>")
      res.write("</html>")
      return res.end();
   }
   console.log(url);
   if(url==='/message'){
      file.writeFileSync('hello.text','DUMMY')
      res.setHeader('Location','/')
      res.statusCode=302;
      return res.end(); 
   }
  
  res.setHeader('content-type','text/html');
  res.write("<html>")
  res.write("<head>")
  res.write("<title>hi vel</title>")
  res.write("<head>")
  res.write("<body>")
  res.write("<h1>hello responses");
  res.write("</body>")
  res.write("</html>")
  res.end();
  

});
server.listen(3308);