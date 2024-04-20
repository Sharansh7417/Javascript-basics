class User{
    constructor(username)
    {
    this.username=username
    }

    logme()
    {
    return `User name is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
    super(username)
    this.email=email
    this.password=password
    }

    addcourse(){
    return `new course has been added by ${this.username}`
    }
}


const tea=new Teacher('sharansh','sharnahs@gmail.com','123445')


const chai=new User('dev')
console.log(chai.logme());
console.log(tea.addcourse());