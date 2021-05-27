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
let xAdd = document.getElementById("x-add");
let submit = document.getElementById("submit");
let editContainer = document.getElementById("edit");
let editName = document.getElementById("edit-name");
let editEmail = document.getElementById("edit-email");
let editPhone = document.getElementById("edit-phone");
let editPicture = document.getElementById("edit-picture");
let editLocation = document.getElementById("edit-location");
let editWorkplace = document.getElementById("edit-workplace");
let editInfo = document.getElementById("edit-info");
let submitEdit = document.getElementById("submit-edit");
let xEdit = document.getElementById("edit-x");
let noRemove = document.getElementById("no");
let yesRemove = document.getElementById("yes");
let warning = document.getElementById("warning");
let mode = document.getElementById("mode");
let edit = false;
let add = false;
let remove = false;

let printEmployees = () => {
    let count = 0;

    usersOutput.innerHTML = "";
    Users.getAll().forEach(user => {
        usersOutput.innerHTML +=
            `
            <div id="${user.id}" class="users-div span-1-of-4" onclick="getPerson(${user.id})">
                <div class="name">${user.name}</div>
                <img class="profile-pic" src="${user.picture}" alt="">
                <div class="email info">${user.email}</div>
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
    let filtered = Users.getAll().filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
    
    filtered.forEach(user => {
        
        usersOutput.innerHTML +=`
            <div id="${user.id}" class="users-div span-1-of-4" onclick="getPerson(${user.id})">
                <div class="name">${user.name}</div>
                <img class="profile-pic" src="${user.picture}" alt="">
                <div class="email info">${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>`;
    });
})
window.getPerson = (id)=> {
    let whatToEdit;
    console.log(id);
    if(remove){
        warning.style.display="block";
        backgroundPicked.style.display = "block";
    }
    else if (edit) {
        editContainer.style.display = "block";
        backgroundPicked.style.display = "block";
    }
    else{
        Users.getById(id).forEach(user => {
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
            backgroundPicked.style.display = "block";
        });
    }
    function editItem(){
        editName.style.fontWeight = "normal";
        editEmail.style.fontWeight = "normal";
        editPhone.style.fontWeight = "normal";
        editPicture.style.fontWeight = "normal";
        editLocation.style.fontWeight = "normal";
        editWorkplace.style.fontWeight = "normal";
        editInfo.style.fontWeight = "normal";

        switch(this.id){
            case "edit-name":
                whatToEdit = "name";
                editName.style.fontWeight = "bold";
                break;
            case "edit-email":
                editEmail.style.fontWeight = "bold";
                whatToEdit = "email";
                break;
            case "edit-phone":
                whatToEdit = "phone";
                editPhone.style.fontWeight = "bold";
                break;
            case "edit-picture":
                whatToEdit = "picture";
                editPicture.style.fontWeight = "bold";
                break;
            case "edit-location":
                whatToEdit = "location";
                editLocation.style.fontWeight = "bold";
                break;
            case "edit-workplace":
                whatToEdit = "workplace";
                editWorkplace.style.fontWeight = "bold";
                break;
            case "edit-info":
                whatToEdit = "info";
                editInfo.style.fontWeight = "bold";
                break;
        }
        
    }
    function runEdit(){
        let inputValue = document.getElementById("new-edit").value;
        if(inputValue !==""){
            Users.editUser(id, whatToEdit, inputValue);
        }
        else{
            alert("cant change to blank");
        }
        printEmployees();
    }
    function removeWithId(){
        Users.removeUser(id);
        warning.style.display="none";
        backgroundPicked.style.display = "none";
        printEmployees();
    }
    editName.onclick = editItem;
    editEmail.onclick = editItem;
    editPhone.onclick = editItem;
    editPicture.onclick = editItem;
    editLocation.onclick = editItem;
    editWorkplace.onclick = editItem;
    editInfo.onclick = editItem;
    submitEdit.onclick = runEdit;
    yesRemove.onclick = removeWithId;
    


};
printEmployees();

window.closeWindow = ()=>{
    pickedUser.style.display = "none";
    backgroundPicked.style.display = "none";
}

function interact() {
    switch(this.id){
        case "edit-users":
            if(!edit){
                edit = true;
                remove = false;
                editDiv.innerHTML = `<img src="/GyldenPizza/resources/images-employee/edit.png" alt="">`;
                removeDiv.innerHTML = `<img src="/GyldenPizza/resources/images-employee/disapprove-64.png" alt="">`;
                mode.innerHTML = "Trykk på brukeren du vil redigere";
                mode.style.display = "block";


            }
            else {
                edit = false;
                editDiv.innerHTML = `<img src="/GyldenPizza/resources/images-employee/edit-64.png" alt="">`;
                mode.innerHTML = "";
                mode.style.display = "none";



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
                mode.innerHTML = "Trykk på brukeren du vil slette";
                mode.style.display = "block";
                remove = true;
                edit = false;
                editDiv.innerHTML = `<img src="/GyldenPizza/resources/images-employee/edit-64.png" alt="">`;
                removeDiv.innerHTML = ` <img src="/GyldenPizza/resources/images-employee/remove.png" alt="">`;
            }
            else 
            {
                remove = false;
                mode.innerHTML = "";
                mode.style.display = "none";
                removeDiv.innerHTML = `<img src="/GyldenPizza/resources/images-employee/disapprove-64.png" alt="">`;
            }
            console.log(remove);
            break;
    }
}

let addUser = ()=>{
    addUserPopup.style.display = "block";
    backgroundPicked.style.display = "block";
}

let closeAddWindow = ()=>{
    addUserPopup.style.display = "none";
    backgroundPicked.style.display = "none";
}
let closeEditWindow = ()=>{
    editContainer.style.display = "none";
    backgroundPicked.style.display = "none";
}

let addUserToArray = () =>{
    let userId = Users.length+1;
    let name = document.getElementById("add-name").value;
    let email = document.getElementById("add-email").value;
    let phone = document.getElementById("add-phone").value;
    let location = document.getElementById("add-location").value;
    let picture = document.getElementById("add-picture").value;
    let workplace = document.getElementById("add-workplace").value;
    let info = document.getElementById("add-info").value;
    if(picture ==""){
        picture = "/GyldenPizza/resources/images-users/profile-pic.jpg";
    }
    if(name == "" || email == "" || phone == "" || location =="" || workplace =="" || info ==""){
        alert("All info required, Photo is optional");
    }
    else{
 
        let user = {
            id: userId,
            name: name,
            email: email,
            phone: phone,
            location: location,
            picture: picture,
            workplace: workplace,
            info: info
        }
        Users.addUser(user);
        usersOutput.innerHTML="";
        printEmployees();
    }
}
let closeRemoveWindow = ()=> {
    warning.style.display="none";
    backgroundPicked.style.display = "none";
}

submit.onclick = addUserToArray;
editDiv.onclick = interact;
addDiv.onclick = interact;
removeDiv.onclick = interact;
xAdd.onclick = closeAddWindow;
xEdit.onclick = closeEditWindow;
noRemove.onclick = closeRemoveWindow;