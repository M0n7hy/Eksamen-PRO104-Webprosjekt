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

let addModal = document.getElementById("addModal");
let editModal = document.getElementById("editModal");
let deleteModal = document.getElementById("deleteModal");
let restaurantIdEdit = document.getElementById("restaurantIdEdit");
let restaurantIdDelete = document.getElementById("restaurantIdDelete");
let restaurantNameEdit = document.getElementById("restaurantNameEdit");
let restaurantDescriptionEdit = document.getElementById("restaurantDescriptionEdit");
let restaurantOpen1Edit = document.getElementById("restaurantOpen1Edit");
let restaurantOpen2Edit = document.getElementById("restaurantOpen2Edit");
let restaurantOpen3Edit = document.getElementById("restaurantOpen3Edit");
let restaurantOpen4Edit = document.getElementById("restaurantOpen4Edit");
let restaurantAddressEdit = document.getElementById("restaurantAddressEdit");
let restaurantImageEdit = document.getElementById("restaurantImageEdit");

let restaurantNameAdd= document.getElementById("restaurantNameAdd");
let restaurantDescriptionAdd= document.getElementById("restaurantDescriptionAdd");
let restaurantOpen1Add= document.getElementById("restaurantOpen1Add");
let restaurantOpen2Add= document.getElementById("restaurantOpen2Add");
let restaurantOpen3Add= document.getElementById("restaurantOpen3Add");
let restaurantOpen4Add= document.getElementById("restaurantOpen4Add");
let restaurantAddressAdd= document.getElementById("restaurantAddressAdd");
let restaurantImageAdd = document.getElementById("restaurantImageAdd");

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

let add = false;
let edit = false;
let remove = false;

/* Funsjon som skriver ut de orginale objectene fra array */
let printRestaurant = () => {
    restaurantPrintDiv.innerHTML = "";
    restauranter.getAll().forEach(restaurantObject => {
        restaurantPrintDiv.innerHTML +=`
        <div id="${restaurantObject.id}" class="infobox">
            <div class="resbilde"><img class="image" src="${restaurantObject.img}" alt="${restaurantObject.img}"></div>
            <div class="txtbox">
                <h2  class="name">${restaurantObject.name}</h2>
                <p>${restaurantObject.description}</p>
                <p><b>${restaurantObject.openings11}</b> ${restaurantObject.openings12}</p>
                <p><b>${restaurantObject.openings21}</b> ${restaurantObject.openings22}</p>
                <p><b>${restaurantObject.location}</b></p>
                <img id="rediger" onclick="editRestaurant(${restaurantObject.id}, '${restaurantObject.name}', '${restaurantObject.description}', '${restaurantObject.openings11}', '${restaurantObject.openings12}', '${restaurantObject.openings21}', '${restaurantObject.openings22}', '${restaurantObject.location}', '${restaurantObject.img}')" class="edit" src="/GyldenPizza/resources/images-restaurant/edit.png"/>
                <img id="slett" onclick="deleteRestaurant(${restaurantObject.id})" class="delete" src="/GyldenPizza/resources/images-restaurant/delete.png"/>
                <hr/>
            </div>
        </div>
        `;
    });
}

window.editRestaurant = (id, name, description, openings11, openings12, openings21, openings22, location, image) => {
    restaurantIdEdit.value = id;
    restaurantNameEdit.value = name;
    restaurantDescriptionEdit.value = description;
    restaurantOpen1Edit.value = openings11;
    restaurantOpen2Edit.value = openings12;
    restaurantOpen3Edit.value = openings21;
    restaurantOpen4Edit.value = openings22;
    restaurantAddressEdit.value = location;
    restaurantImageEdit.value = image;
    editModal.style.display="grid";
}

window.updateRestaurant = () => {
    restauranter.editRestaurant(restaurantIdEdit.value, "name", restaurantNameEdit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "desc", restaurantDescriptionEdit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "open1", restaurantOpen1Edit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "open2", restaurantOpen2Edit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "open3", restaurantOpen3Edit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "open4", restaurantOpen4Edit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "address", restaurantAddressEdit.value);
    restauranter.editRestaurant(restaurantIdEdit.value, "img", restaurantImageEdit.value);
    printRestaurant();
    closeModal();
}

/* restauranter.addRestaurant(restaurant); */

window.deleteRestaurant = (id) => {
    restaurantIdDelete.value = id;
    deleteModal.style.display="grid";
}

window.removeRestaurant = () => {
    restauranter.removeRestaurant(restaurantIdDelete.value);
    printRestaurant();
    closeModal();
}

window.addModal = () => {
    addModal.style.display="grid";
    
}

window.registerRestaurant = () => {
    let restaurant = {
        id: Math.floor(Math.random() * 10),
        name: restaurantNameAdd.value,
        description: restaurantDescriptionAdd.value,
        openings11: restaurantOpen1Add.value,
        openings12: restaurantOpen2Add.value,
        openings21: restaurantOpen3Add.value,
        openings22: restaurantOpen4Add.value,
        location: restaurantAddressAdd.value,
        img: restaurantImageAdd.value
    }
    restauranter.addRestaurant(restaurant);
    printRestaurant();
    closeModal();
}

window.closeModal = () => {
    editModal.style.display="none";
    deleteModal.style.display="none";
    addModal.style.display="none";
}

/* Denne funksjonen henter id fra objectene som blir trykt på. */
window.getRestaurant = (id) => {
    let editing;
    console.log(id);
    if(remove){
        /* Viser en popup for varsling om sletting */
        warning.style.display = "block";
        pickedbackground.style.display = "block";
    } else if (edit) {
        /* Viser popup for redigering */
        editpopup.style.display = "block";
        pickedbackground.style.display = "block";
    } else if (add) {

        /* Funsjone som skriver ut de nye objectene fra array */
        restauranter.getById(id).forEach(restaurantObject => {
            pickedrestaurant.innerHTML = `
            <div id="${restaurantObject.id}" class="infobox" onclick="getRestaurant(${restaurantObject.id})">
                <div class="resbilde"><img class="image" src="${restaurantObject.img}" alt="${restaurantObject.img}"></div>
                <div class="txtbox">
                    <h2  class="name">${restaurantObject.name}</h2>
                    <p>${restaurantObject.description}</p>
                    <p><b>${restaurantObject.openings11}</b> ${restaurantObject.openings12}</p>
                    <p><b>${restaurantObject.openings21}</b> ${restaurantObject.openings22}</p>
                    <p><b>${restaurantObject.location}</b></p>
                    <img id="rediger" onclick="editRestaurant(${restaurantObject.id})" class="edit" src="/GyldenPizza/resources/images-restaurant/edit.png">
                    <img id="slett" class="delete" src="/GyldenPizza/resources/images-restaurant/delete.png">
                    <hr>
                </div>
            </div>
            `;
        });
    }


    /* Funksjon for å velge hvilke detalj som blir redigert */
    function editRestaurants() {
        editpopup.style.display = "block";
        pickedbackground.style.display = "block";
        nameEdit.style.fontWeight = "normal";
        descEdit.style.fontWeight = "normal";
        openEdit1.style.fontWeight = "normal";
        openEdit2.style.fontWeight = "normal";
        openEdit3.style.fontWeight = "normal";
        openEdit4.style.fontWeight = "normal";
        addressEdit.style.fontWeight = "normal";
        imgEdit.style.fontWeight = "normal";

        /* Teksten i redigerpopup blir blod når den blir trykt */
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

    /* Henter og setter inn ny redigert detalj */
    function runEdit() {
        let newEdit = document.getElementById("editNew").value;
        restauranter.editRestaurant(id, editing, newEdit);
        printRestaurant();
    }

    /* Funksjon som sletter basert på ID av objectene */
    function removeWithId() {
        restauranter.removeRestaurant(id);
        warning.style.display = "none";
        pickedbackground.style.display = "none";
        printRestaurant();
    }

    /* Aktiverer funksjon med klikk */
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

/* Funksjon for å krysse ut popups */
window.closeWindow = () => {
    pickedrestaurant.style.display = "none";
    pickedbackground.style.display = "none";
}

/* Funksjon for icon-knappene */
function interact() {
    switch(this.id) {
        /* kjører om legg til kappen blir trykt */
      
        /* Kjører om rediger knappen blir trykt */
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
        
        /* Kjører om slett knappen blir trykt. Gir en melding om å velge hvilken du vil slette.  */
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

/* Legg til popup kommer fram */
let addRestaurant = () => {
    restpopup.style.display = "grid";
}

/* Lukker legg til popup ved å trykke på X-knappen */
let closeAddWindow = () => {
    restpopup.style.display = "none";
}

/* Lukker rediger popup ved p trykke på X-knappen */
let closeEditWindow = () => {
    editpopup.style.display = "none";
    pickedbackground.style.display = "none";
}

/* Sender vediene fra legg til popup til arrayet */
let addRestToArray = () => {
    let userId = restauranter.setID + 1;
    let namepopup = document.getElementById("name-popup").value;
    let descpopup = document.getElementById("description-popup").value;
    let openpopup1 = document.getElementById("opening1-popup").value;
    let openpopup2 = document.getElementById("opening2-popup").value;
    let openpopup3 = document.getElementById("opening3-popup").value;
    let openpopup4 = document.getElementById("opening4-popup").value;
    let localpopup = document.getElementById("location-popup").value;
    let imgpopup = document.getElementById("image-popup").value;

    /* Gir varlsen om en eller fler av felten er tomme i legg til popup */
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
        closeModal();
    }
}

/* Lukker slett popup etter trykk*/
let closeRemoveWindow = () => {
    warning.style.display = "none";
    pickedbackground.style.display = "none";
}

/* Aktiverer funksjoner på klikk */
submitadd.onclick = addRestToArray;
addrestaurant.onclick = interact;
editRestaurants.onclick = interact;
delrestaurant.onclick = interact;
xpopup.onclick = closeAddWindow;
editX.onclick = closeEditWindow;
removeNo.onclick = closeRemoveWindow;