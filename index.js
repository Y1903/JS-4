// task 1
const nativeArray = [4, 2, 1, 3];
for (let i = 0; i < nativeArray.length; i++) {
  console.log(nativeArray[i]);
}
console.log(nativeArray);

// task 2
function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) return false; 
  }
  return true;
}
const numbers = [2, 3, 4, 5, 10, 13, 17, 20];
numbers.filter(isPrime).forEach(num => console.log(num));

// task 3
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatedArrays = arr1.concat(arr2);
console.log(concatedArrays);

// task 4
let arr3 = [6, 5, 4];
arr3.reverse();
console.log(arr3);

// task 5
let arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

// task 6
let arr5 = [7, 8, 9];
arr5.unshift(1, 2, 3);
console.log(arr5);

// task 7
let arr6 = ["aaa", "bbb", "ccc"];
console.log(arr6[0]);
arr6.shift();
console.log(arr6);

// task 8
let arr7 = ["aaa", "bbb", "ccc"];
console.log(arr7[2]);
arr7.pop();
console.log(arr7);

// task 9
let arr8 = [9, 10, 11, 12, 13];
let newArr1 = arr8.slice(1, 5);
console.log(newArr1);

// task 10
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

// task 11
let arr10 = [1, 2, 3, 4, 5];
let newArr2 = arr10.slice(2, 5);
console.log(newArr2);

// task 12
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 0, "w", "trtr");
arr11.pop();
arr11.push("vvv", "a", "hello");
console.log(arr11);

