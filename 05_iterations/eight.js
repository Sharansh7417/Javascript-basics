// const nums=[1,2,3];


// const res=nums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and current value is ${currval}`);
//     return acc+currval;
// },0);

// console.log(res);

const arr=[
    {course:"python",price:3000},
    {course:"DSA",price:3000},
    {course:"MOB DEV",price:3000},
    {course:"WEB DEV",price:3000},
]


const res=arr.reduce((acc,item)=>(acc+item.price),0);
console.log(res);