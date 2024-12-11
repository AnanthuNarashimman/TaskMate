console.log("Hello World!");

//Code for dynamic increasing of textarea height
function adjustHeight(el) {
    el.style.height = "auto"; 
    el.style.height = el.scrollHeight + "px"; 
}


let addButton = document.querySelector('.sbtn');




//functionality for adding tasks
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
});


function addTask() {
    
    //checking whether there is a task to add
    let taskinput = document.querySelector('.taskbox');
    let task = taskinput.value;

    //if there is a task to add
    if(task){

    //creating a new li element with the required edit buttons and close icons

    //initializing the unordered list
    let EntireList = document.querySelector('.addedTasks');
    
    //creating a li element with the name "listElement"
    let listElement = document.createElement('li');
    listElement.classList.add('tasks');
    
    //creating edit button with the name "editButton"
    let editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.classList.add('editbtn');
    
    //creating a close icon with the name "cIcon"
    let cIcon = document.createElement('i');
    cIcon.setAttribute('id', 'closeIcon');
    cIcon.classList.add('fa-solid');
    cIcon.classList.add('fa-xmark');

    //creating a textarea to hold the tasks with the name "taskArea"
    let textArea = document.createElement('textarea');
    textArea.rows='1';
    textArea.wrap='soft';
    textArea.readOnly = true;
    textArea.classList.add('taskarea');
    textArea.classList.add('pointerclass');
    textArea.value = task;
    task='';
    taskinput.value = '';

    

    //appending the button and icon to the li element
    listElement.append(editButton);
    listElement.append(cIcon);
    listElement.append(textArea);
    

    //appending all other elements to the unordered lists
    EntireList.append(listElement);
    saveTask();
    //changing the height of the textarea dynamically after the insertion into the DOM
    adjustHeight(textArea);
    }

    //if there is no task to add
    else {
        window.alert("Please type a task to add")
    }

}

//adding eventlisteners to the elements inside list entity

window.addEventListener('click', function(e) {

    //task removing functionality
    if(e.target.id==='closeIcon'){
        console.log("Close Icon");
        e.target.parentElement.remove();
        saveTask();
    }

    //task editing functionality
    if(e.target.classList.contains('editbtn') && !e.target.classList.contains('savebtn')){
        console.log("Edit Button");
        let selectedTask = e.target.parentElement.querySelector('.taskarea');
        selectedTask.readOnly=false;
        let value = selectedTask.value;
        selectedTask.value='';
        selectedTask.value=value;
        selectedTask.focus();
        e.target.innerText = 'Save';
        selectedTask.classList.remove('pointerclass');
        e.target.classList.add('savebtn');
        saveTask();
        return;
    }

    //task saving functionality after editing it
    if(e.target.classList.contains('savebtn') && e.target.classList.contains('editbtn')){
        let textArea = e.target.parentElement.querySelector('.taskarea');
        console.log("Saved successfully");
        let selectedTask = e.target.parentElement.querySelector('.taskarea');
        selectedTask.readOnly=true;
        e.target.innerText='Edit';
        selectedTask.classList.add('pointerclass');
        e.target.classList.remove('savebtn');
        adjustHeight(textArea);
        saveTask();
        return;
    }

    if(e.target.tagName === 'TEXTAREA' &&  !e.target.parentElement.querySelector('button').classList.contains('savebtn')){
        console.log("success");
        e.target.classList.toggle('checked');
    }

    if(!e.target.classList.contains('contentarea') && !e.target.classList.contains('icon')) {
        licon.classList.remove('visitactive');
        giticon.classList.remove('visitactive');
        gicon.classList.remove('visitactive');

        gcontainer.classList.remove('active');
        gitcontainer.classList.remove('active');
        lcontainer.classList.remove('active');
    }
})


//code for visit pages

const gvisit = document.querySelector('.gvisit');
const lvisit = document.querySelector('.lvisit');
const gitvisit = document.querySelector('.gitvisit');

const gcontainer = document.querySelector('.gcontentarea');
const lcontainer = document.querySelector('.lcontentarea');
const gitcontainer = document.querySelector('.gitcontentarea');

const gicon = document.querySelector('.gicon');
const licon = document.querySelector('.licon');
const giticon = document.querySelector('.giticon');

const gobackbtns = document.querySelectorAll('.gback');

const icons = document.querySelectorAll('.icon');

gvisit.addEventListener('click', function() {
    gicon.classList.toggle('visitactive');

    licon.classList.remove('visitactive');
    giticon.classList.remove('visitactive');

    lcontainer.classList.remove('active');
    gitcontainer.classList.remove('active');
    
    gcontainer.classList.toggle('active');
})

lvisit.addEventListener('click', function() {
    licon.classList.toggle('visitactive');
    
    gicon.classList.remove('visitactive');
    giticon.classList.remove('visitactive');
    
    gcontainer.classList.remove('active');
    gitcontainer.classList.remove('active');
    
    lcontainer.classList.toggle('active');
})

gitvisit.addEventListener('click', function() {
    giticon.classList.toggle('visitactive');
    
    gicon.classList.remove('visitactive');
    licon.classList.remove('visitactive');
    
    gcontainer.classList.remove('active');
    lcontainer.classList.remove('active');
    
    gitcontainer.classList.toggle('active');
})

gobackbtns.forEach((btn) => {
    btn.addEventListener('click', function () {

        icons.forEach((icon) => {
            icon.classList.remove('visitactive');
        })

        btn.parentElement.classList.remove('active');
        btn.parentElement.querySelector('.icon').classList.remove('visitactive');
    });
});

function saveTask() {
    const tasks = [];
    document.querySelectorAll('.tasks').forEach((taskElement)=> {
        const taskText = taskElement.querySelector('.taskarea').value;
        tasks.push(taskText);
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTask() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.forEach((taskText)=>{
        let EntireList = document.querySelector('.addedTasks');
    
        //creating a li element with the name "listElement"
        let listElement = document.createElement('li');
        listElement.classList.add('tasks');
    
        //creating edit button with the name "editButton"
        let editButton = document.createElement('button');
        editButton.innerText = "Edit";
        editButton.classList.add('editbtn');
    
        //creating a close icon with the name "cIcon"
        let cIcon = document.createElement('i');
        cIcon.setAttribute('id', 'closeIcon');
        cIcon.classList.add('fa-solid');
        cIcon.classList.add('fa-xmark');

        //creating a textarea to hold the tasks with the name "taskArea"
        let textArea = document.createElement('textarea');
        textArea.rows='1';
        textArea.wrap='soft';
        textArea.readOnly = true;
        textArea.classList.add('taskarea');
        textArea.classList.add('pointerclass');
        textArea.value = taskText;

    

        //appending the button and icon to the li element
        listElement.append(editButton);
        listElement.append(cIcon);
        listElement.append(textArea);
    

        //appending all other elements to the unordered lists
        EntireList.append(listElement);
        //changing the height of the textarea dynamically after the insertion into the DOM
        adjustHeight(textArea);
    })
}

window.addEventListener('DOMContentLoaded', loadTask);


