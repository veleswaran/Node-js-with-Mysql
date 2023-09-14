// let m=0;
// let s=0;
// let my=setInterval(()=>{

// if(s==60){
//     m++;
// }
// else{
//     s++;
// }
// console.log(m+":"+s);
// },1000);
// let time=0;
// let vel = setInterval(() => {
//     let minutes=Math.floor(time/60);
//     let seconds=time%60;
//     let formatedMinutes=String(minutes);
//     let formatesSeconds=String(seconds);
    
//     console.log(formatedMinutes+":"+formatesSeconds);
//     time++;

// },1000);

  
let time=1;
let my=setInterval(()=>{
    let minute=Math.floor(time/60);
    let second=time%60;

    let form=String(minute);
    let form1=String(second);
    time++;
    console.log(form+":"+form1);
},1000);