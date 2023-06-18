// before ES6 (ECMAScript-6, is is modern javascript) var was used to decleare any variable

// 1. var
// it can re-decleare,update

// 2. let 
// var is globally scoped while let and const are block scoped
// let can be update but can not redecleared

// 3. const
// if can not update and cannot redecleared
// need to initialized at a time of decleration unlike let and var

let a=12;
const b=11;
{
    let a = 21;
    console.log(a);
}
a=23
console.log(a)