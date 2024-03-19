

// if(true)
// {
// const a=10;
// let b=20;
// var c=30;//this creates problem due to its scope
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// function one()
// {
//     const username="sharansh";

//     function two()
//     {
//         const website="youtube";
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// one();

/////////////////In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution.

addone(5);//hoisting helps it to work 
function addone( num)
{
    return num+1;
}
// console.log(addone(5));


add(5);//this is not allowed in js 
const add=function addtwo( num)
{
    return num+2;
}

// console.log(add(5));