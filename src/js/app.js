import "../scss/app.scss";


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  const price=document.getElementsByClassName('price');
  var elements = document.getElementsByClassName('product');
  for(var i=0; i<elements.length; i++) { 
  elements[i].setAttribute('data-price', price[i].innerHTML);
  };


  const cont=document.getElementsByClassName('content');
  var elementNumber = document.getElementsByClassName('product');
  for(var i=0; i<elementNumber.length; i++) {
    elements[i].setAttribute('DataContent',cont[i].innerHTML)
  };
  

   console.log(cont);
   console.log(elementNumber.length);




});
