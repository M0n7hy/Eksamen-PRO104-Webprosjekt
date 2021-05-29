import restauranter from './modules/restauranter.js';

let restaurantPrintDiv = document.getElementById("infobox");

let addrestaurant = document.getElementById("add");
let editRestaurants = document.getElementById("edits");
let delrestaurant = document.getElementById("delete");
let mode = document.getElementById("mode");

let pickedbackground = document.getElementById("picked-background");
let pickedrestaurant = document.getElementById("rastaurantpicked");

let xpopup = document.getElementById("addX");
let restpopup = document.getElementById("add-popup");
let submitadd = document.getElementById("submit");

let editpopup = document.getElementById("edit-popup");
let editX = document.getElementById("editX");
let nameEdit = document.getElementById("editName");
let descEdit = document.getElementById("editDesc");
let openEdit1 = document.getElementById("editOpen1");
let openEdit2 = document.getElementById("editOpen2");
let openEdit3 = document.getElementById("editOpen3");
let openEdit4 = document.getElementById("editOpen4");
let addressEdit = document.getElementById("editAddress");
let imgEdit = document.getElementById("editImg");
let submitEdit = document.getElementById("submitEdit");

let warning = document.getElementById("warning");
let removeYes = document.getElementById("yes");
let removeNo = document.getElementById("no");

let printRestaurant = () => {
    restaurantPrintDiv.innerHTML = "";
    restauranter.getAll().forEach(restaurantObject => {
        restaurantPrintDiv.innerHTML +=`
        <div id="${restaurantObject.id}" class="infobox" onclick="getRestaurant(${restaurantObject.id})">
            <div class="resbilde"><img class="image" src="${restaurantObject.img}" alt="${restaurantObject.img}"></div>
            <div class="txtbox">
                <h2  class="name">${restaurantObject.name}</h2>
                <p>${restaurantObject.description}</p>
                <p><b>${restaurantObject.openings11}</b> ${restaurantObject.openings12}</p>
                <p><b>${restaurantObject.openings21}</b> ${restaurantObject.openings22}</p>
                <p><b>${restaurantObject.location}</b></p>
                <img id="rediger" class="edit" src="/GyldenPizza/resources/images-restaurant/edit.png">
                <img id="slett" class="delete" src="/GyldenPizza/resources/images-restaurant/delete.png">
                <hr>
            </div>
        </div>
        `;
    });
}

window.getRestaurant = (id) => {
    let editing;
    console.log(id);
    if(remove){
        warning.style.display = "block";
        pickedbackground.style.display = "block";
    } else if (edit) {
        editpopup.style.display = "block";
        pickedbackground.style.display = "block";
    } else if (add) {

        restauranter.getById(id).forEach(restaurant => {
            pickedrestaurant.innerHTML = `
                <div id="${restaurantObject.id}" class="infobox" onclick="getRestaurant(${restaurantObject.id})">
                    <div class="resbilde"><img class="image" src="${restaurantObject.img}" alt="${restaurantObject.img}"></div>
                    <div class="txtbox">
                        <h2 class="name">${restaurant.name}</h2>
                        <p>${restaurant.description}</p>
                        <p><b>${restaurantObject.openings11}</b> ${restaurantObject.openings12}</p>
                        <p><b>${restaurantObject.openings21}</b> ${restaurantObject.openings22}</p>
                        <p><b>${restaurant.location}</b></p>
                        <img id="rediger" class="edit" src="/GyldenPizza/resources/images-restaurant/edit.png">
                        <img id="slett" class="delete" src="/GyldenPizza/resources/images-restaurant/delete.png">
                        <hr>
                    </div>
                </div>
                `;
            pickedrestaurant.style.display = "block";
            pickedbackground.style.display = "block";
        });
    }

    function editRestaurants() {
        nameEdit.style.fontWeight = "normal";
        descEdit.style.fontWeight = "normal";
        openEdit1.style.fontWeight = "normal";
        openEdit2.style.fontWeight = "normal";
        openEdit3.style.fontWeight = "normal";
        openEdit4.style.fontWeight = "normal";
        addressEdit.style.fontWeight = "normal";
        imgEdit.style.fontWeight = "normal";

        switch(this.id) {
            case "editName":
                editing = "name";
                nameEdit.style.fontWeight = "bold";
                break;
            case "editDesc":
                editing = "desc";
                descEdit.style.fontWeight = "bold";
                break;
            case "editOpen1":
                editing = "open1";
                openEdit1.style.fontWeight = "bold";
                break;
            case "editOpen2":
                editing = "open2";
                openEdit2.style.fontWeight = "bold";
                break;
            case "editOpen3":
                editing = "open3";
                openEdit3.style.fontWeight = "bold";
                break;
            case "editOpen4":
                editing = "open4";
                openEdit4.style.fontWeight = "bold";
                break;
            case "editAddress":
                editing = "address";
                addressEdit.style.fontWeight = "bold";
                break;
            case "editImg":
                editing = "img";
                imgEdit.style.fontWeight = "bold";
                break;
        }
    }

    function runEdit() {
        let newEdit = document.getElementById("editNew").value;
        restauranter.editRestaurant(id, editing, newEdit);
        printRestaurant();
    }

    function removeWithId() {
        restauranter.removeRestaurant(id);
        warning.style.display = "none";
        pickedbackground.style.display = "none";
        printRestaurant();
    }

    nameEdit.onclick = editRestaurants;
    descEdit.onclick = editRestaurants;
    openEdit1.onclick = editRestaurants;
    openEdit2.onclick = editRestaurants;
    openEdit3.onclick = editRestaurants;
    openEdit4.onclick = editRestaurants;
    addressEdit.onclick = editRestaurants;
    imgEdit.onclick = editRestaurants;
    submitEdit.onclick = runEdit;
    removeYes.onclick = removeWithId;
}
printRestaurant();

window.closeWindow = () => {
    pickedrestaurant.style.display = "none";
    pickedbackground.style.display = "none";
}

let add = false;
let edit = false;
let remove = false;

function interact() {
    switch(this.id) {
        case "add":
            add = true;
            console.log(add);
            addRestaurant();
            break;
        
        case "edits":
            if (!edit) {
                edit = true;
                remove = false;
                editRestaurants.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/editActive.png">`;
                delrestaurant.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/delete.png">`;
                mode.innerHTML = "Trykk på restauranten du vil redigere";
                mode.style.display = "block";
            } else {
                edit = false;
                editRestaurants.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/edit.png">`;
                mode.innerHTML = "";
                mode.style.display = "none";
            }
            console.log(edit);
            break;
        
        case "delete":
            if (!remove) {
                mode.innerHTML = "Trykk på brukeren du vil slette";
                mode.style.display = "block";
                remove = true;
                edit = false;
                delrestaurant.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/deleteActive.png">`;
                editRestaurants.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/edit.png">`;
            } else {
                remove = false;
                mode.innerHTML = "";
                mode.style.display = "none";
                delrestaurant.innerHTML = `<img src="/GyldenPizza/resources/images-restaurant/delete.png">`;
            }
            console.log(remove);
            break;
    }
}

let addRestaurant = () => {
    restpopup.style.display = "block";
    pickedbackground.style.display = "block";
}

let closeAddWindow = () => {
    restpopup.style.display = "none";
    pickedbackground.style.display = "none";
}

let closeEditWindow = () => {
    editpopup.style.display = "none";
    pickedbackground.style.display = "none";
}

let addRestToArray = () => {
    let userId = restauranter.length + 1;
    let namepopup = document.getElementById("name-popup").value;
    let descpopup = document.getElementById("description-popup").value;
    let openpopup1 = document.getElementById("opening1-popup").value;
    let openpopup2 = document.getElementById("opening2-popup").value;
    let openpopup3 = document.getElementById("opening3-popup").value;
    let openpopup4 = document.getElementById("opening4-popup").value;
    let localpopup = document.getElementById("location-popup").value;
    let imgpopup = document.getElementById("image-popup").value;

    if (namepopup == "" || descpopup == "" || openpopup1 == "" ||openpopup2 == "" ||openpopup3 == "" ||openpopup4 == "" || localpopup =="") {
        alert("Fyll inn alle feltene");
    } else {
        let restaurant = {
            id: userId,
            name: namepopup,
            description: descpopup,
            openings11: openpopup1,
            openings12: openpopup2,
            openings21: openpopup3,
            openings22: openpopup4,
            location: localpopup,
            img: imgpopup
        }
        restauranter.addRestaurant(restaurant);
        restaurantPrintDiv.innerHTML = "";
        printRestaurant();
    }
}

let closeRemoveWindow = () => {
    warning.style.display = "none";
    pickedbackground.style.display = "none";
}

submitadd.onclick = addRestToArray;
addrestaurant.onclick = interact;
editRestaurants.onclick = interact;
delrestaurant.onclick = interact;
xpopup.onclick = closeAddWindow;
editX.onclick = closeEditWindow;
removeNo.onclick = closeRemoveWindow;