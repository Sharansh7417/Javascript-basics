// let descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// Math.PI=5 //It will not work as this cannot be changed or modified due to reason as u can see by console logging in next line
// console.log(descriptor);

// output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,          //Due to these properties, value of PI cannot be changed
//     configurable: false
//   }


// const chai={
//     name:'ginger-tea',
//     price:250,
//     isAvailable:true,

//     nhibani:function(){
//     console.log('chai nhi bani');
//     }
// }

// // console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// for (const [key,value] of Object.entries(chai)) {//directly here we cannot iterate object so we used Object.entries()
    
//     if(typeof value!=='function')
//     console.log(`key ${key}:value:${value}`);
// }

const love={
    name:'amrita',
    year:'2022',
    meet:'shahdol'
}

// console.log(Object.getOwnPropertyDescriptor(love,'name'));

Object.defineProperties(love,{name:{
   value: 'motu',
   writable:false},
    year:{
   value: 2001,
   writable:true  
    }
})

console.log(Object.getOwnPropertyDescriptors(love));