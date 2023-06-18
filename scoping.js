// what is scope 
// it is certain region of the program where a defined variable exist and can be recognized and beyond that is can not be recognized. 
// i.g global scope,functional scope, block scope

// what is deep copy and shadow copy

// let can be shadow by let,const 
// const can be shadow by const,let
// let and const can not be shadow by var

const a=10;
{
    let a = 34;  // here this 'a' shadow 'a' before this block
    console.log(a);
}
console.log(a);