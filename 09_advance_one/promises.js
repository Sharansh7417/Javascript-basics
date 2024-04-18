// const promiseone=new Promise(function(resolve,reject){

//     //Do an async Task
//     //DB calls,crytography tasks

//     setTimeout(function () {
//     console.log('Promise is created') ;
//     resolve()   
//     },1000)
// })

// promiseone.then(function(){
//     console.log('Promise consumed');
// })

//OR

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log('async task2 is created');
//         resolve()
//     },1000)


// }).then(function(){
//    console.log('Promise2 is consumed');
// })

//OR

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(
//     function()    
//     {console.log('Async task 3 created');
//     resolve({username:"sharansh",email:"sharansh@gmail.com"})
// },1000);
// })

// promisethree.then(function(data){
// console.log(data);
// })

// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Promise 4 is created');
//         let error=false

//         if(!error){
//             resolve({username:"sharansh",email:"sharansh@gmail.com"})
//         }

//         else
//         {
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     },1000)
// })

// promisefour.then
// (function(data){
//     console.log(data);
//     return data.username
// }).then
// (function(username){
//     console.log(username);
// }).catch
// (function(error){
// console.log(error);
// }).finally(function(){
//     console.log("error is resolved or rejected");})

    // const promisefive=new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log('Promise 5 is created');
    //         let error=false
    
    //         if(!error){
    //             resolve({username:"javascript",email:"js@gmail.com"})
    //         }
    
    //         else
    //         {
    //             reject('ERROR SOMETHING WENT WRONG')
    //         }
    //     },1000)
    // })


    // async function consumePromise(){
    
    // try {
    // const response= await promisefive
    // console.log(response);
        
    // } 
    // catch (error) {
    // console.log(error);
        
    // }

    // }

    // consumePromise()


    // async function users(){

    //     try{
    //     const response=await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data=await response.json();
    //     console.log(data);
    //     }

    //     catch(error)
    //     {
    //     console.log(error);
    //     }
    // }

    // users()

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>
        {
            console.log(error);
        }

    )
    