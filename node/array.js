let arr=[1,2,3,7,9,6];
let arr1=[];
let target=16;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            arr1[0]=i;
            arr1[1]=j;
            console.log(i+":"+j);
            break;
        }
    }

}
console.log(arr1);