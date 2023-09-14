const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (num) => {
    rl.question('Enter the value of a',(a)=>{
        rl.question('Enter the value of b',(b)=>{
            b=parseInt(b);
            a=parseInt(a);
        let d=a+b;
                console.log('The sum of the a and B is ::'+d);
            
        });

    });

      
 
});
