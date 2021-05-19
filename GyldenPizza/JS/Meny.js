import pizzaMenu from './modules/Inventory.js';

let menuPrintPizzaDiv = document.getElementById("print-menu-pizza");
let menuPrintDrinkDiv = document.getElementById("print-menu-drinks");

function printMenu(){
    printMenuPizza();
    printMenuDrinks();
}

let printMenuPizza = () => {
    pizzaMenu.getAllPizza().forEach(pizzaObject => {
        menuPrintPizzaDiv.innerHTML += `<div id="element"><img id="pic-pizza" src="resources/images-pizza/${pizzaObject.img}"><h2>${pizzaObject.name}</h2></div>`;
    });
}

let printMenuDrinks = () => {
    pizzaMenu.getAllDrinks().forEach(drinkObject => {
        menuPrintDrinkDiv.innerHTML += `<img id="pic-soda" src="resources/images-soda/${drinkObject.img}"><h2>${drinkObject.name}</h2>`;
    })
}

printMenu();