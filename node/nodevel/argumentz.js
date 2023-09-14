console.log(process.argv);
console.log(process.argv.slice(2)[0]);

const minimist=require("minimist");
const argvNew=minimist(process.argv.slice(2));
console.log(argvNew.name);