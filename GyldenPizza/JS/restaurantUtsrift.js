import restauranter from './modules/restauranter.js';

let restaurantPrintDiv = document.getElementById("infobox");

let editModal = document.getElementById("editModal");
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

let addModal = document.getElementById("addModal");
let restaurantNameAdd= document.getElementById("restaurantNameAdd");
let restaurantDescriptionAdd= document.getElementById("restaurantDescriptionAdd");
let restaurantOpen1Add= document.getElementById("restaurantOpen1Add");
let restaurantOpen2Add= document.getElementById("restaurantOpen2Add");
let restaurantOpen3Add= document.getElementById("restaurantOpen3Add");
let restaurantOpen4Add= document.getElementById("restaurantOpen4Add");
let restaurantAddressAdd= document.getElementById("restaurantAddressAdd");
let restaurantImageAdd = document.getElementById("restaurantImageAdd");

let deleteModal = document.getElementById("deleteModal");

/* Funsjon som skriver ut objectene fra array */
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

/* Henter verdiene fra siden for å redigere */
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

/* Henter verdiene fra funksjonen over for å sette inn i arrayet */
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

/* Funksjon for å hente restauranter fra siden */
window.deleteRestaurant = (id) => {
    restaurantIdDelete.value = id;
    deleteModal.style.display="grid";
}

/* Funksjon for å slette restauranter fra arrayet */
window.removeRestaurant = () => {
    restauranter.removeRestaurant(restaurantIdDelete.value);
    printRestaurant();
    closeModal();
}

/* Funksjon for legg til popup */
window.addModal = () => {
    addModal.style.display="grid";
}

/* Funksjon for å legge resturant verdiene på riktig plass i arrayet */
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

/* Funksjon for å lukke popup vinduene */
window.closeModal = () => {
    editModal.style.display="none";
    deleteModal.style.display="none";
    addModal.style.display="none";
}

printRestaurant();