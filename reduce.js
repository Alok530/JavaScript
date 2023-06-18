// Reduce

// return a single value 
// first a=arr[0],b=arr[1] and then result store in a, and run for remaining element and result store in 'a'

let arr=[1,2,3,4,5];
let sum = arr.reduce((a,b)=>{
    return a+b;
},0);

console.log("sum is ",sum);


// alternate of reduce
// let ans=0;
// for(i in arr)
// {
//     ans+=arr[i];
// }
// console.log(ans);

// function fun(a,b){
//     return a+b;
// }
// let temp = arr.reduce(fun);
// console.log(temp);

// find max value in arr
console.log(arr.reduce((a,b)=>{
    if(b>a){
        a=b;
    }
    return a;
},0))

const users = [
    {firstname:"alok",age:21},
    {firstname:"siso",age:32},
    {firstname:"jatin",age:33},
    {firstname:"anuj",age:24},
]

// Ques:- find firstname of all users whose age is less than 30;
let ans = users.filter((a)=>{
    return a.age<30;
}).map((a)=>a.firstname);

let index=0;
ans = users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstname);
        // index+=1;
    }
    return acc;
},[])

console.log(ans);

// increase the age of each by 10 years
ans = users.map((a)=>{
    a.age+=10;
    return a;
})

console.log(ans);