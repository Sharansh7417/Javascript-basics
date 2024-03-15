let ar1=[0,1,2,3,4,5,];
// console.log(ar1);

// const ar2=new Array(1,2,"3","true");
// console.log(ar2);
// console.log(ar2[2]);

// //Arrays methods

// ar1.push(9)
// ar1.pop();

// ar1.unshift(0);//add value to starting
// ar1.shift();//remove value from start

// console.log(ar1);

// const newarr=ar1.join()//copy array elements to new array and makes it's type as string

// console.log(ar1);
// console.log(newarr);

console.log("A ",ar1);
const myn1=ar1.slice(1,3)//yeh original array mai koi change nhi krti h

console.log(myn1);
console.log("B ",ar1);

const myn2=ar1.splice(1,3)//yeh slice kia gya part ko original array mai hta deti hai 
console.log(myn2);
console.log("C ",ar1);

// const myn2=