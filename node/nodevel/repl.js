const repl=require("repl");
 const obj=repl.start("hi veleswaran");

 obj.on('exit',()=>{
    console.log("exiting REPL");
    process.exit();
 });