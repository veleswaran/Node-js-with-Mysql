// for(let i=1;i<6;i++){
//     let str="";
//     for(let j=0;j<6-i;j++){
//         str+=" ";
//     }
//     for(let k=i;k>0;k--){
//         str+=k;
//     }
//     for(let l=2;l<=i;l++){
//         str+=l;
//     }
//     console.log(str);
// }

//array:
 const arr=[1,2,3,45,5,6,7];
 let sum=0;
 for(let a of arr){
    sum+=a;
 }
 console.log(sum);
 let target=50;
 let arr1=[];
 for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            arr1[0]=i;
            arr1[1]=j;
        }
    }
 }
 console.log(arr1);