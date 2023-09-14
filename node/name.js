const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter the number:', (n)=>{
 for( i=0;i<n;i++){
  console.log('hi');
 }
rl.question('enter the name',(name)=>{
  console.log(name);
});
});
rl.question('Enter the name:',(v)=>{
  console.log(v);
rl.close();
});