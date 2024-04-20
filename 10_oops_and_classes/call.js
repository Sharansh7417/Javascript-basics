
function setuserName(userName){
    this.userName=userName
    console.log('called');
}

function setDetails(userName,email,password)
{
    setuserName.call(this,userName);

    // setuserName(userName)  //this line just call the function and instantly removes after execution deu to which no chnge in username is done
    
    this.email=email;
    this.password=password
}

let res= new setDetails('sharansh','sharansh@gmail.com','amsucheta')
console.log(res);