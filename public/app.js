'use strict'
// let dataURL = './data.json';
// let req = new XMLHttpRequest();
// req.open('GET', dataURL); 
// req.responseType='json'; 
// req.send(); 
fetch('data.json')
.then(function(resp){
   return resp.json();
})
.then(function(data) {
    
      console.log('data recived')
      console.log(data);
 
      const obj = data;
      const lst = document.createElement('ul');
 
      for(let i = 0; i < data.length; i++) {
 
         const liTem = document.createElement('li');
         liTem.textContent = data[i].Make;
         lst.appendChild(liTem);
      };
 
      document.getElementById('li').appendChild(lst);
 
})
 

