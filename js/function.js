'use strict';

 function name() {
    //тело 
 }

 function calculateNumber(initialValue) { //<--- Параметр
    let x = initialValue;
    x = x + 100;
    x = x / 5;


   return x;
 }
 
 const result = calculateNumber(1);
 const result1 = calculateNumber(50); //<--- Аргумент
 console.log(result);
 console.log(result1);

 function calculateCircleArea(circleRadius) { //<--- Параметр
   const area = 3.14 * circleRadius ** 2;
   return area;
 }

 const circleArea1 = calculateCircleArea(5); //<--- Аргумент
 console.log(circleArea1);
 const circleArea2 = calculateCircleArea(3); //<--- Аргумент
 console.log(circleArea2);

 function createHTMLElement(tag, id, text) {
   const element = document.createElement(tag);
   element.id = id;
   element.innerText = text;

   return element;
 }

 const h1Element = createHTMLElement('h1', 'header1', 'просто текст');
 document.body.append(h1Element);

const brokenLinks = ['vk', 'youtube', 'facebook'];

function linksRepaire() {

}