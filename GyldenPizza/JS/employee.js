import Users from './modules/Users.js';
let userCount = document.getElementById("number-of-users");
let search = document.getElementById("search");
let usersOutput = document.getElementById("users-output");
let pickedUser = document.getElementById("picked-user");
let backgroundPicked = document.getElementById("background-picked");
let editDiv = document.getElementById("edit-users");
let addDiv = document.getElementById("add-users");
let removeDiv = document.getElementById("remove-users");
let addUserPopup = document.getElementById("add-user-popup");

let edit = false;
let add = false;
let remove = false;

let printEmployees = () => {
    let count = 0;
  
    Users.getAll().forEach(user => {
        usersOutput.innerHTML +=
            `
            <div id="${user.id}" class="users-div span-1-of-4" onclick="getPerson(${user.id})">
                <div class="name">${user.name}</div>
                <img style="width: 100%" src="${user.picture}" alt="">
                <div class="email info">Email: ${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>`;
            count++;
    });
    userCount.innerHTML = `${count} ansatte`;
}
search.addEventListener('input', (event) =>{
    let value = event.target.value;
    usersOutput.innerHTML="";
    let filtered = Users.getAll().filter(user => user.name.includes(value));
    
    filtered.forEach(user => {
        
        usersOutput.innerHTML +=`
            <div id="${user.id}" class="users-div span-1-of-4" onclick="getPerson(${user.id})">
                <div class="name">${user.name}</div>
                <img style="width: 100%" src="${user.picture}" alt="">
                <div class="email info">Email: ${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>`;
   
    });
})
window.getPerson = (id)=> {
    let objectId = id.id;
    console.log(objectId);
    console.log(Users.getById(objectId));
    localStorage.setItem("id", objectId);
    Users.getById(objectId).forEach(user => {
        pickedUser.innerHTML =`
            <div id="image" onclick="closeWindow()">
                <img src="/GyldenPizza/resources/images-employee/x-mark-4-24.png" alt="x">
            </div>
            <div class="name-popup popup-item">${user.name}</div>
            <div class="email-popup popup-item">email: ${user.email}</div>
            <div class="phone-popup popup-item">phone: ${user.phone}</div>
            <div class="location-popup popup-item">location: ${user.location}</div>
            <div class="workplace-popup popup-item">workplace: ${user.workplace}</div>
            <div class="info-popup popup-item">${user.info}</div>
        `;
        pickedUser.style.display = "block";
        backgroundPicked.style.display = "block"
    });
};
printEmployees();

window.closeWindow = ()=>{
    pickedUser.style.display = "none";
    backgroundPicked.style.display = "none"
}
editDiv.onclick = interact;
addDiv.onclick = interact;
removeDiv.onclick = interact;
function interact() {
    switch(this.id){
        case "edit-users":
            if(!edit){
                edit = true;
                editDiv.innerHTML = "stop editing";
            }

            else 
            {
                edit = false;
                editDiv.innerHTML = "edit";
            }
            console.log(edit);
            break;

        case "add-users":
            add = true;
            console.log(add);
            addUser();
            break;


        case "remove-users":
            if(!remove){
                remove = true;
                removeDiv.innerHTML = "stop editing";
            }
            else 
            {
                remove = false;
                removeDiv.innerHTML = "edit";
            }
            console.log(remove);
            break;
    }
}

let addUser = ()=>{
    addUserPopup.style.display = "block";
    backgroundPicked.style.display = "block";
}
