function user(email,password)
{
    this.email=email
    this.password=password

    Object.defineProperty(this,password,{
        set password(value){
        this._password=value
        },

        get password(){
        return this._password.toUpperCase();
        }
    })

    Object.defineProperty(this,'email',{
        set email(value){
        this._email=value
        },

        get email(){
        return this._email.toUpperCase();
        }
    })
}

let res=new user('sharnahs@gmail.com','abc')
console.log(res);