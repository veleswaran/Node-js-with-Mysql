console.log("hello world ..!");
for(i=1;i<=5;i++){
    var p="";
    for(j=0;j<5-i;j++){
        p+=" ";
    }
    for(k=0;k<i*2-1;k++){
        p+="*";
    }
    p+="\n";
    console.log(p);
}