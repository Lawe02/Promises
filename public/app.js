'use strict'
// let dataURL = './data.json';
// let req = new XMLHttpRequest();
// req.open('GET', dataURL); 
// req.responseType='json'; 
// req.send();

async function myFunction() {
   let response = await fetch('data.json');

   if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);  
   }

  const data = await response.json()
  return data;
}

myFunction()
.then(data => {
   
const lst = document.createElement('ul');
 
for(let i = 0; i < data.length; i++) {

   const liTem = document.createElement('li');
   liTem.textContent = data[i].Make;
   lst.appendChild(liTem);
};

document.getElementById('li').appendChild(lst);
})
  
 
 
 
      