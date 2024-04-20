// let heroes=['thor','spiderman']

// let heroPower={
//     spiderman:'sling',
//     Thor:'hammer'
// }

// Object.prototype.sharansh=function(){
//     console.log('sharansh loves to play ML');
// }

// // heroes.sharansh();
// // heroPower.sharansh();

// Array.prototype.gupta=function(){
//     console.log('Sharansh Loves her mother');
// }

// heroes.gupta();
// heroPower.gupta();    //Not possible as array posses property and method of objects but vice versa is not true

//Inheritance

// let user={
//     username:'sharansh',
//     password:'chai'
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__=user//older method of using inheritance

// //modern syntax

// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername="chaiaurcode   "

String.prototype.truelength=function(){
    // console.log(this);
    console.log(` Length is ${this.trim().length}`);  //length is not a function 
}

anotherusername.truelength();

'hitesh'.truelength();
'sharansh'.truelength();