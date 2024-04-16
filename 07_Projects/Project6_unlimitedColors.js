//generate random color

let randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
  
    for(let i=0;i<6;i++)
    {
      color+=hex[Math.round(Math.random()*16)]
    }
    return color;
  }
  
  // console.log(randomColor())
  
  //target body element
  const target=document.querySelector('body')
  
  document.querySelector('#start').addEventListener('click',function(){
    const set=  setInterval(function(){
    target.style.backgroundColor=randomColor()
    },1000)
  
  document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(set)
  })  
  })