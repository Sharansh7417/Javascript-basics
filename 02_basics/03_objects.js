//Two ways of declaring objects are there first by using literal and second is done with help of contructor
//when object is decleared using contructor then singleton is formed

//object literal

const mySym=Symbol("key1")

const JsUser={
    name:"sharansh",
    "fullname":"gupta",
    [mySym]:"mykey1",//Syntax for using symbol
    email:"sharansh120303gmail.com",
    phone:7417646900,
    age:18,
    isLoggedIn:false,
    lastlogIn:["mon","tues","sat"]
}

// console.log(JsUser.age);
// console.log(JsUser['lastlogIn']);//Important method 
// console.log(JsUser.fullname);//error dega 
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);

// JsUser.email="sharansh@gmail.com"
// Object.freeze(JsUser);
// JsUser.email="12345555";//now this change will not occur as object is already freezed 

// console.log(JsUser);
JsUser.greeting=function(){
    console.log("hello js user");
}

JsUser.greetingTWO=function(){
    console.log(`hello js user,${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTWO());