let arr = [1,2,3,4,5,6,7,8,9];
// const reducer = (acumulator,current_value) => acumulator+current_value;
// const result = arr.reduce(reducer);
const result = arr.reduce((acumulator, current_value) => acumulator+current_value); // one liner
console.log(result);

// iterate over last element of Array
const result1 = arr.reduce((acumulator, current_value) => current_value);
console.log(result1);

// if else with reduce;
const result2 = arr.reduce((acumulator,current_value) => {if(acumulator < current_value){
    return acumulator} else{return current_value}}) 
console.log(result2);
