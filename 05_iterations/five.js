const coding=["js","rb","cpp","sf"];

// coding.forEach(function (val){
//     console.log(val);
// })//callback function ka naam nhi hota

// coding.forEach((val)=>{
// console.log(val);
// })

// function printme(val)
// {
//     console.log(val);
// }

// coding.forEach(printme);

// coding.forEach((val,index,arr)=>{// these values can be accessed 
//     console.log(val,index,arr);

// })

const mycoding=[{
    languageName:"java",
    languageFileName:"jv"
  
},
   { languageName:"javascirpt",
    languageFileName:"js"
  
},
    {languageName:"cpp",
    languageFileName:"c++"
  
},
 
]

mycoding.forEach((item)=>{
console.log(item.languageFileName);
})