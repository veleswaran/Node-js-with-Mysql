let n=5;
for(let i=1;i<=n;i++){
    let c=1;
    let a="";
    for(let j=1;j<=i;j++){
        c=(c*(n-j))/j;
     
    }
    console.log(c);
}