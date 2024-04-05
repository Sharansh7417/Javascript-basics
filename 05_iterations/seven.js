const arr=[1,2,3,4,5,6,7,8,9,10];

// const ans=arr.map((item)=> item+10);

// console.log(ans);

// const ans=arr.forEach((item)=>item+10)//for each loop does not return any value
// console.log(ans);

//chaining method
const ans=arr.map((item)=>item*2).map((item)=>item +1).filter((item)=>item>10);
console.log(ans);