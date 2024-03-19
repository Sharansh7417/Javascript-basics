// const user={
//     username:"hitesh",
//     price:999,

//     welcomemessage:function welcome()
//     {
//     console.log(`${this.username}, welcome to website`);
//     // console.log(this);//this is used to present the current context of the object
//     }
// }
// // user.welcomemessage();
// user.username="sharansh";
// console.log(user);

// console.log(this);//this will result in empty object as there is not global object,this result will chnge when u run this code in brownser as in brownser global are defined by default

// function chai()
// {
//     username="sharansh"
//     // console.log(this.sharansh);//this will give result undefined ,it works only in obejcts not in functions
//     // console.log(this);//It can be used (it produces lot of infomation that we can use)
// }
// chai();

// const chai=function ()
// {
//     username="sharansh"
//     console.log(this);
//     console.log(this);//It can be used (it produces lot of infomation that we can use)

// }

// chai();

// const chai=()=>{
//     username="sharansh"
//     console.log(this);//it returns empty object
// }

// chai();

// const add=(num1,num2)=>{
// return num1+num2;
// }//explicit return 

// const add1=(num1,num2)=>(num1+num2);//implicit return

const res=(num1,num2)=>({usrrname:"sharansh"})//syntax to return object 

console.log(res(10,20));