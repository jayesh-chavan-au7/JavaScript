const arr = [1,2,3,4,5,6,7,8,9];
let result = arr.filter(no => no >= 5);
console.log(result);

// filtering arr to even numberes
console.log("Even No.");
result = arr.filter(no => no%2 == 0);
console.log(result);