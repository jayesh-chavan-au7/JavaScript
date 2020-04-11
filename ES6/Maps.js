// map Object and its methods in javascript
const map1 = new Map([["key1","Value1"],["key2","Value2"],["key3","Value3"]]);
console.log("Map : ",map1);

const size = map1.size;
console.log("Size of Map :",size);

console.log("keys : ",map1.keys());
console.log("values : ",map1.values());

const key1 = map1.get("key1");
console.log("key1 :",key1);

console.log("seting new key and value");
map1.set("key4","Value4");
console.log(map1);

console.log("delete value in map");
map1.delete("key1");
console.log(map1);

console.log("Check for value");
console.log(map1.has("key1"));

console.log("Clearing map");
map1.clear()
console.log("map : ",map1);

// map object and function
const sum = (a,b) => a+b; // Function
const arr = [1,2,3,4,5,6,7]; // itrable object
console.log(arr);
let result = arr.map(sum);
console.log(result);
