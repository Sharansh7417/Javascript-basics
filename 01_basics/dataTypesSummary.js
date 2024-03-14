//Javascript is a Dynamic Typed language
// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.


//Primitive Data type(call by value)

//7 types :String ,Number,Boolean,null,undefined,Symbol,BigInt

//null mean it is empty it does not signify its value is 0.

// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);//false

const biNumber=345539493453353393n// it is example of BigInt

console.log(typeof biNumber);


//refer typeof table and their result
//link:  https://262.ecma-international.org/5.1/#sec-11.4.3


//Non -primitive Data type(Refrence data type)

// Array,Objects,Funtions

const heroes=["batman","superman"];
let myObj ={
    name:"sharansh",
    age:22,

}

let myFunction=function()
{
    console.log("hello world");
}

console.log(typeof heroes);//obejct
console.log(typeof myObj);//object
console.log(typeof myFunction);//object function or function
