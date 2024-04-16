const insert=document.querySelector('#insert');

window.addEventListener('keydown',function(e){
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
  </div>`
})