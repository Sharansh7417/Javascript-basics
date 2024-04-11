const form=document.querySelector('form')

form.addEventListener('submit',function(e){

  e.preventDefault()//This prevents the default nature of sending values to server which is not required in the project 
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)

  const result=document.querySelector('#results')
  
  if(height===''||height<0||isNaN(height))
  {
  result.innerHTML='Please Enter a valid height'
  }
  else if(weight===''||weight<0||isNaN(weight))
  {
  result.innerHTML='Please Enter a valid weight'
  }

  else
  {
  const ans=(weight*10000/(height*height)).toFixed(2);
  
  

  if(ans<18.6)
  {
    result.innerHTML=`<span>BMI is ${ans} and Under Weight</span>`
  }

  else if(ans>18.6&&ans<24.9)
  {
    result.innerHTML=`<span>BMI is ${ans} and Normal Range</span>`
  }
  else
  {
    result.innerHTML=`<span>BMI is ${ans} and OverWeight</span>`
  }
  }
})