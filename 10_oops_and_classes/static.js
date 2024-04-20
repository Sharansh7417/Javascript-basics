class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){// static prevents access of sensitive data
        return `123`
    }
}

const res=new User('sharansh')
console.log(res.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone=new Teacher('dev','dev@gmail.com')
console.log(iphone.createId());