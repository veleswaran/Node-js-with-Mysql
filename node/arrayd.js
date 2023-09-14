function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
const arr=[1,2,3,4,5,6,4,34,3,2,2];  
console.log(removeDuplicates(arr));