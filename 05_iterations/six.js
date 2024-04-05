// const coding=["js","rb","cpp","sf"];

// let res=coding.forEach( (item)=>{//for each loop, does not return value even if return is used.
//     console.log(item);
                        
// })

// console.log(res);

// const num=[1,2,3,4,5,6,7,8,9,10]

// // const ans=num.filter((item)=>item>4);//filter function accepts a callback function and a condition.

// const ans=num.filter((item)=>{return item>4})//while opening scope using curly braces always u have to use return otherwise it will return empty array


// console.log(ans);


const newarr=[
    {title:"Book-one", genre:"romantic",publication:"1994",edition:"2005"},
    {title:"Book-two", genre:"fiction",publication:"1995",edition:"2007"},
    {title:"Book-three", genre:"mystery",publication:"1996",edition:"2008"},
    {title:"Book-four", genre:"horror",publication:"1998",edition:"2009"},
    {title:"Book-five", genre:"political",publication:"1999",edition:"2010"},
]

const res=newarr.filter( (item)=>item.genre=="romantic");
const res2=newarr.filter((item)=>item.edition>2007);
console.log(res);
console.log(res2);