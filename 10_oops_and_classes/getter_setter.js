

class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return `email is ${this._email.toUpperCase()}`
    }

    set email(value){
        this._email=value
    }

    get password(){
        return `passowrd is ${this._password.toUpperCase()}`
    }

    set password(value)
    {
        this._password=value
    }
}

let chai=new user('sharnahs@gmail.com','1234')
console.log(chai.password);
console.log(chai.email);