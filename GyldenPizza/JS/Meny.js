import pizzaMenu from './modules/Inventory.js';

let menuPrintDiv = document.getElementById("print-menu");
let nameDiv = document.createElement("h2");


let printMenu = () => {
    pizzaMenu.getAll().forEach(pizzaObject => {
        menuPrintDiv.innerHTML += `<img src="resources/images/${pizzaObject.img}><h2>${pizzaObject.name}</h2>`;
    });
}

printMenu();