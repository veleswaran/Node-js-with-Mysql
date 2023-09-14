const readline=require('readline');

let num=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

num.question("Enter the value of name = ",(name)=>{
    console.log (name);
    num.close();
});
