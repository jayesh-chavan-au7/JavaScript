const result = []

function permute(arr,start,end){
  if(start == end){
    res = [];
    res.push(...arr)
    result.push(res)
    return;
  }
   
    for (let index = start; index <= end; index++) {
        let temp = arr[start];
        arr[start] = arr[index];
        arr[index] = temp
        permute(arr,start+1,end)
        temp = arr[start];
        arr[start] = arr[index];
        arr[index] = temp
    
  }
}

permute([1,7],0,1)
console.log(result);