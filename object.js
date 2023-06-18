const user = {
    name: "alok",
    reg: 530,
    age: 21
}

// access property
console.log(user.name);

// modify property
user.name = "alok kumar rai"

// delete property
delete user.age

// loop
for( key in user){
    console.log(user[key]);
}