import restauranter from './modules/restauranter.js';

let restaurantPrintDiv = document.getElementById("infobox");

let addrestaurant = document.getElementById("leggTil");
let editrestaurant = document.getElementById("rediger");
let delrestaurant = document.getElementById("slett");
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
let openEdit = document.getElementById("editOpen");
let addressEdit = document.getElementById("editAddress");
let imgEdit = document.getElementById("editImg");
let newEdit = document.getElementById("editNew");
let submitEdit = document.getElementById("submitedit");

let warning = document.getElementById("warning");
let removeYes = document.getElementById("yes");
let removeNo = document.getElementById("no");

let add = false;
let edit = false;
let remove = false;

let printRestaurant = () => {
    restaurantPrintDiv.innerHTML = "";
    restauranter.getAll().forEach(restaurantObject => {
        restaurantPrintDiv.innerHTML +=`
        <div id="${restaurantObject.id}" class="infobox" onclick="getRestaurant(${restaurantObject.id})">
                <div class="resbilde">${restaurantObject.img}</div>
                <div class="txtbox">
                    <h2  class="name">${restaurantObject.name}</h2>
                    <p>${restaurantObject.description}</p>
                    <p>${restaurantObject.openings}</p>
                    <p><b>${restaurantObject.location}</b></p>
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
                <div id="image" onclick="closeWindow()">
                    <img src="/GyldenPizza/resources/images-employee/x-mark-4-24.png" alt="x">
                </div>
                <div id="${restaurantObject.id}" class="infobox" onclick="getRestaurant(${restaurantObject.id})">
                    <div class="resbilde">${restaurant.img}</div>
                        <div class="txtbox">
                            <h2 class="name">${restaurant.name}</h2>
                            <p>${restaurant.description}</p>
                            <p>${restaurant.openings}</p>
                            <p><b>${restaurant.location}</b></p>
                        </div>
                </div>
                `;
            pickedrestaurant.style.display = "block";
            pickedbackground.style.display = "block";
        });
    }
    function editItem() {
        nameEdit.style.fontWeight = "normal";
        descEdit.style.fontWeight = "normal";
        openEdit.style.fontWeight = "normal";
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
            case "editOpen":
                editing = "open";
                openEdit.style.fontWeight = "bold";
                break;
            case "editAddress":
                editing = "address";
                addressEdit.style.fontWeight = "bold";
                break;
            case "editImg":
                editing = "img";
                imgEdit.style.fontWeight = "bold";
        }
    }

    function runEdit() {
        restauranter.editRestaurant(id, editing, document.getElementById("editNew"))
        printRestaurant();
    }

    function removeWithId() {
        restauranter.removeRestaurant(id);
        warning.style.display = "none";
        pickedbackground.style.display = "none";
        printRestaurant();
    }
    nameEdit.onclick = editItem;
    descEdit.onclick = editItem;
    openEdit.onclick = editItem;
    addressEdit.onclick = editItem;
    imgEdit.onclick = editItem;
    submitEdit.onclick = runEdit;
    removeYes.onclick = removeWithId;

}
printRestaurant();

window.closeWindow = () => {
    pickedrestaurant.style.display = "none";
    pickedbackground.style.display = "none";
}

function interact() {
    switch(this.id) {
        case "leggTil":
            add = true;
            console.log(add);
            addRestaurant();
            break;
        
        case "rediger":
            if (!edit) {
                edit = true;
                remove = false;
                editrestaurant.innerHTML = "Stop redigering";
                mode.innerHTML = "Trykk på restauranten du vil redigere";
                mode.style.display = "block";
            } else {
                edit = false;
                editrestaurant.innerHTML = "Rediger";
                mode.innerHTML = "";
                mode.style.display = "none";
            }
            console.log(edit);
            break;
        
        case "slett":
            if (!remove) {
                mode.innerHTML = "Trykk på brukeren du vil slette";
                mode.style.display = "block";
                remove = true;
                edit = false;
                delrestaurant.innerHTML = "Ikke slett";
            } else {
                remove = false;
                mode.innerHTML = "";
                mode.style.display = "none";
                delrestaurant.innerHTML = "Slett"
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
    let openpopup = document.getElementById("opening-popup").value;
    let localpopup = document.getElementById("location-popup").value;
    let imgpopup = document.getElementById("image-popup").value;

    if (namepopup == "" || descpopup == "" || openpopup == "" || localpopup =="") {
        alert("Fyll inn alle feltene");
    } else {
        let restaurant = {
            id: userId,
            name: namepopup,
            description: descpopup,
            openings: openpopup,
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
editrestaurant.onclick = interact;
delrestaurant.onclick = interact;
xpopup.onclick = closeAddWindow;
editX.onclick = closeEditWindow;
removeNo.onclick = closeRemoveWindow;