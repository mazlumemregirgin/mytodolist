let addToDoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoList');
let inputText = document.getElementById('textArea');
let clearToDo = document.getElementById('clearButton');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
    

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

})