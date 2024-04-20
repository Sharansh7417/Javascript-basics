//Js has a prototypal Behaviour

// function multiplyBy5(num){
//     return num*5;
// }

// multiplyBy5.power=2    //function can behave like object

// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(userName,score)
{
    this.userName=userName
    this.score=score
}

createUser.prototype.increment=function (){
    this.score++;
}

createUser.prototype.printMe=function (){
    console.log(` cost is ${this.score}`);
}

const tea=new createUser('tea',25)
const chai=new createUser('chai',250)
// console.log(tea);
// console.log(chai);

tea.printMe();