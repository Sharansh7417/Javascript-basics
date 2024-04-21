const user={

    _email:'sh@gmail.com',
    _password:'abcd'

    ,
    get email(){
    return this._email
    }
    ,
    set email(val){
    this._password=val
    }
}

let tea=Object.create(user)
console.log(tea.email);