//Immediately Invoked Functions Exepressions
//these functions are used to avoid/remove global scope pollution
//and added to these this function must be executed immediately after it is declared.


//Syntax of IIFE
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();//semicolon is essential here otherwise it will not know where to end this context

((num)=>{
    // unnamed IIFE
    console.log(`DB CONNECTED ${num}`);
})(10);

//agr ek function likengai using IIFE toh semicolon ki vjah se koi errror nhi aayegi ,lekin ek se zyda likhna par error dega ,that'y it is recommended to use semicolon after IIFE.

