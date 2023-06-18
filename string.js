// String

// decelaration
let s = "this is a string";
// or 
let x = 'this is a string';

console.log(typeof(s));
console.log(s);

// let badstring = 'i have'not went there'
// use bakeslash to overcome this (\)
let badstring = 'i have\'not went there';

console.log(badstring);


// concatination
let third = x+" "+badstring;
console.log(third);


// any data type concatination with string is string
let y = '67'+123;
console.log(typeof(y));
console.log(y);


// String to number or number to string
let numstr = '345';
let num = Number(numstr);
console.log(num,typeof(num));

// to string
console.log(num.toString());

let temp = `${s} i know it is number ${num}`
console.log(temp);



// Methods of string
let str = "this is string";
console.log(str.length);

console.log(str[5]);

console.log(str.indexOf('it'));

console.log(str.slice(2,7));

console.log(str.toUpperCase());

console.log(str.toLocaleLowerCase());


// Convert string to uppercase without using toUpperCase() function
for(let i=0;i<str.length;i++){
    str=str.replace(str[i],str[i].toUpperCase());
}
console.log(str);


// split :- split the string into array 
// parameter :- separator
// let c = str.split('');
// console.log(c.reverse().join(''))


// Reverse a string without using inbuilt fun
let ans='';
for(let i=str.length-1;i>=0;i--){
    ans+=str[i];
}
console.log(ans);

console.log(typeof(str.substring(0,10))); // return string parameter(a,b), index[a,b)
console.log(typeof(str.substr(0,5)));  // return string parameter(a,b), a:- starting position, b :- length of string