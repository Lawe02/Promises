let dataURL = './data.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

console.log('data received');

req.onload = () => {
     const data = req.response;
     console.log(data);

     const obj = data;
     const lst = document.createElement('ul');

     for(let i = 0; i < data.length; i++) {

        const liTem = document.createElement('li');
        liTem.textContent = data[i].Make;
        lst.appendChild(liTem);
     };

     document.getElementById('li').appendChild(lst);
}