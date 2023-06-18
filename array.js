// array decleration
const array = [1,2,3,4,5,6];
const nums = new Array(9,8,7);

// how to access
console.log(array);
console.log(array[array.length-1])  // last elemet

// Push 
array.push(12);
// alternative of push
array[array.length]=122;
console.log(array);

// Unshift :- push new element in beiging of array
array.unshift(0);
console.log(array);

// Pop :- remove last element from array and return that value
array.pop();

// shift :- remove an element from beigning and return that value
array.shift();

const user = [
    {name:'alok',marks:88},
    {name:'sanny',marks:78},
    {name:'raju',marks:82},
    {name:'aman',marks:50},
];

// find name of user whose marks>80
console.log(user.filter((e)=>{
    return e.marks>80
}))


// concate method :- use to add two array
const arr1 = [1,2,3,4];
const arr2 = [5,6,7];
const arr3 = arr1.concat(arr2) 
console.log(arr3);

// slice 
console.log(arr3.slice(2)); // return element from [2,end]
console.log(arr3.slice(2,4)); // return element [2,4) index


// spread operator
const arr4 = [...arr1,...arr2];
console.log(arr4);


// loop
for(let i=0;i<arr4.length;i++){
    // console.log(arr4[i]);
}

for(let i of arr4){
    // console.log(i);
}


// Join :- use to join all array elements into string by passing seperator ()
let student = ['a','l','o','k'];
// task :- join all character in student and form "alok"
console.log(student.join(''));


// Splice is use to erase element from arrary (a,b)-> a:from which index start erasing, b:how many element to erase
// student.splice(1,2);
console.log(student);



// reverse
student.reverse();
console.log(student);


// find largest number in array
const nums1 = [4,19,2,10];
console.log(nums1.reduce((a,b)=>{
    a=a>=b?a:b;
    return a;
},0))


// Sort function sort array assuming as string
nums1.sort((a,b)=>{
    return a-b;
})
// Sort function, sort the array according to return value of compare function
// if a-b is -ve then a then b
// if a-b is +ve then b then a
// if a-b is 0 then in same order as they appear
console.log(nums1);