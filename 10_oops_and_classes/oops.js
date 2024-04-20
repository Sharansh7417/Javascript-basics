// const user={//Object literal: It is a collection of properties and methods
//     userName:"hitesh",
//     userCount:8,
//     signedIn:true

//     ,
//     getuserDetails:function(){
//         // console.log('got user details');
//         // console.log(`My name is ${userName}`);//this will throw error as it does not know the context you are talking about
//         // console.log(`My name is ${this.userName}`);
//         console.log(this);
//     }
    
// }

// console.log(user.userName);
// console.log(user.getuserDetails());
// console.log(this);

function user(userName,loginCount,signedIn)
{
    this.userName=userName
    this.loginCount=loginCount
    this.signedIn=signedIn

    return this//defined implicitly
}

const userone=new user('sharansh',7,false)
const usertwo=new user('shobhit',4,true)
// console.log(userone);
// console.log(usertwo);

// console.log(userone.constructor);//.constructor uska function ka refrence deta hai

console.log(userone instanceof user);//return true as userone is instance of user
console.log(userone instanceof Object);//return true as userone is instance of object




//Step1:when new keyword is called it creates a empty object which is also known as instance
//Step2:Constructor function call hota hai aur jo bhi ssaarai arguments hotai ha usko pack krkai de deta hai
//Step3:Jo bhi arguments hotai voh this keyword mai inject ho jatai hai
//Step4:Hmko arguments function ka andr mil jatai hai