// filter
// filter fun run for every element and filter an array with values that pass a test, create a new array 

let arr = [1,2,3,4,5];
let arr3 = arr.filter((a)=>{
    if(a>=5)
    return true;
})
console.log(arr3);



// alternete of filter
let ans=[];
for(i in arr)
{
    if(arr[i]>=5)
    ans.push(arr[i]);
}
console.log(ans)