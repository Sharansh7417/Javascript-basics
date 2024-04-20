//ES6

// class User{
//           constructor(username,email,password)
//           {
//           this.username=username
//           this.email=email
//           this.password=password
//           }

//           encryptPassword(){
//           return `Encrypted password is ${this.password}abc`
//           }

//           setUsername(){
//           return `${this.username.toUpperCase()}`
//           }
// }

// const chai=new User('sharansh','chai@gmail.com','123')
// console.log(chai.encryptPassword());
// console.log(chai.setUsername());

//behind the scene

function User(username,email,password)
{
    this.username=username
    this.email=email
    this.password=password
}

Object.prototype.encryptPassword=function(){
return `Encrypted password is ${this.password}abc`
}

Object.prototype.setUsername=function(){
return `${this.username.toUpperCase()}`
}

const tea=new User('Amrita','gundi@gmail.com','123')

console.log(tea.setUsername());
console.log(tea.encryptPassword());