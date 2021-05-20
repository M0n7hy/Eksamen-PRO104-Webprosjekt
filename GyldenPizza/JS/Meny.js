import pizzaMenu from './modules/Inventory.js';

let menuPrintPizzaDiv = document.getElementById("print-menu-pizza");
let menuPrintDrinkDiv = document.getElementById("print-menu-drinks");

function printMenu(){
    printMenuPizza();
    printMenuDrinks();
}

let printMenuPizza = () => {
    pizzaMenu.getAllPizza().forEach(pizzaObject => {
        menuPrintPizzaDiv.innerHTML +=
            `<div id="element">
                <h2>${pizzaObject.name}</h2>
                <h3>${pizzaObject.price}kr</h3>
                <img id="pic-pizza" src="resources/images-pizza/${pizzaObject.img}">
                <p class="sizeEl">Size</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="test">Allergies: ${pizzaObject.allergies}</p>
            </div>`;
    });
}

let printMenuDrinks = () => {
    pizzaMenu.getAllDrinks().forEach(drinkObject => {
        menuPrintDrinkDiv.innerHTML +=
            `<div id="element">
                <h2>${drinkObject.name}</h2>
                <h3>${drinkObject.price}kr</h3>
                <img id="pic-soda" src="resources/images-soda/${drinkObject.img}">
            </div>`;
    })
}

printMenu();