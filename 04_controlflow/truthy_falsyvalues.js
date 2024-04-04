//truthy values
//"0",'false'," ",[],{},function(){}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

// const userEmail=[];

// if(userEmail.length==0)
// {
//     console.log("empty");
// }


const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
val1=null??10// 10 assign ho jaigi
val1=undefined??15
val1=null??10??20//pheli  value assign hogi  yaani ki 10

console.log(val1);

//ternairy operator

condtion ? true:false;