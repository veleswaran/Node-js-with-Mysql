 const Path = require('path');

 const filePath ="./txt.txt";
 console.log(__dirname);

 console.log(__filename);

 console.log(Path.dirname(filePath));

const fs = require('fs');

 fs.readFile(filePath,(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
 })
 
const content={name:"veleswaran",age:27,phoneNumber:9361172225};
 
 try {
   fs.writeFile(filePath, JSON.stringify(content), { flag: "a+" }, (err) => {
     if (err) {
       console.error(err);
     } else {
       console.log('Content appended successfully.');
     }
   });
 } catch (err) {
   console.error(err);
 }
const fsPromise = require('fs').promises;

// const writingFile = async()=>{
//     try{
//     // await fsPromis.writeFile(texFile,content);
//     await fsPromise.writeFile(filePath,'\n it is awesome ot ',{
//     flag:'a+'});
//     await fsPromise.appendFile(filePath,'\n this file');
//     const data = await fsPromise.readFile(filePath);
//     console.log (data.toString);
//     }
//     catch(err){
//     console.log(err);
//     }
//     };
    
//     writingFile();
    