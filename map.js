let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// 1. map fun 
// map fun run for every element and return a new array

let arr2;
// arr2 = arr.map((a) => {
//     return a * 5;
// })

arr2 = arr.map(double);
console.log("double", arr2);

function double(a){
    return 2*a;
}

function triple(a){
    return 3*a;
}
// console.log(arr2);


// Alternate of map function
const ans = [];
let index = 0;
for (i in arr) {
    ans[index] = arr[i]*5;
    index++;
}
console.log(ans);