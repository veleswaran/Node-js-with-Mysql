const arr1=[12,43,56,44,12,32];
const arr2=[21,23,12,43,23,10,4];
let len1=arr1.length;
let len2=arr2.length;
let len=len1+len2;
const arr3=[];
for(let i=0;i<len;i++){
    if(i<len1){
        arr3[i]=arr1[i];
    }
    else{
        arr3[i]=arr2[i-len1];
    }
}
arr3.sort((a,b)=>a-b);
console.log(arr3);
let mid=Math.round(len/2);

if(len%2===0){
    let ans=(arr3[mid-1]+arr3[mid])/2;
    console.log(ans);
}
else{
    console.log(arr3[mid-1]);
}