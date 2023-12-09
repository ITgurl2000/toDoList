document. addEventListener('DOMContentLoaded', function(){
const inputElment = document.querySelector('.input') 
const addElement= document.querySelector('.addBtn')   
const list = document.querySelector('.unorderedList');
addElement.addEventListener('click' ,function(event){
event.preventDefault();  
addNewTask (inputElment.value); 
inputElment.value='';}) 
function addNewTask(userInput){ 
    const taskItem = document.createElement('li'); 
    taskItem.innerHTML = ` <input type="checkbox"> <span>${userInput} </span> <input type="submit" value="Delete" class= "deleteBtn">`; 
    list.appendChild(taskItem);       
    taskItem.querySelector('.deleteBtn').addEventListener('click' , function (event){ 
    event.preventDefault(); 
    taskItem.remove() }) ;
} 
}); 


 

 
