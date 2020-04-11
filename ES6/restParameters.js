const restParameters = (...inputs) => {let arg = [];for(let i in inputs){arg.push(inputs[i])}; return arg;}
let arg = restParameters(1,2,3,4,5,6,7,8,9);
console.log(arg);

const result = arg.reduce((accumulator, current_value) => accumulator+current_value);
console.log(result);

const restParameters1 = (...args) => args.reduce((a,b) => a+b);
console.log(restParameters1(1,2,3,4,5,6,7,8,9));