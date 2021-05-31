import pizzaMenu from './modules/Inventory.js';

/*Gets the three important*/
let menuPrintPizzaDiv = document.getElementById("print-menu-pizza");
let menuPrintDrinkDiv = document.getElementById("print-menu-drinks");
let editFormDiv = document.querySelector(".edit-form");

function printMenu(){
    printMenuPizza();
    printMenuDrinks();
}
/*Prints out all the pizzas*/
let printMenuPizza = () => {
    pizzaMenu.getAllPizza().forEach(pizzaObject => {
        menuPrintPizzaDiv.innerHTML +=
            `<div id="element">
                <h2>${pizzaObject.name}</h2>
                <h3>${pizzaObject.price}kr</h3>
                <img id="pic-pizza" src="resources/images-pizza/${pizzaObject.img}">
                <div class="sizeContainer">
                    <div class="size-dropdown">
                        <p class="sizeEl">Size</p>
                        <div class="alternatives">
                            <a></a>
                        </div>
                    </div>
                </div>
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


let type;

document.getElementById("menu-edit-btn-add").onclick=add;
function add() {
    type = 0;
    editFormDiv.innerHTML =`
    <input type="text" id="nameInp" placeholder="Navn:">
    <button id="btnTestName" type="button">Sjekk om pizzaen finnes fra før</button>
    `;
    document.getElementById("btnTestName").onclick=checkNameToObj;

}


document.getElementById("menu-edit-btn-edit").onclick=edit;
function edit() {
    type = 1;
    editFormDiv.innerHTML =`
        <br><p>Legg inn navn på pizzaen du ønsker å gjøre endringer på:</p><br>
            <input type="text" id="nameInp" placeholder="Navn:">
            <button id="btnTestName" type="button">Se om endringer er mulig</button>
        `;
        document.getElementById("btnTestName").onclick=checkNameToObj;
}

document.querySelector(".menu-edit-btn-remove").addEventListener("click", remove);
function remove() {
    type = 2;
    console.log("remove");
    editFormDiv.innerHTML =`
    <br><p>Legg inn navn på pizzaen du ønsker å potensielt fjerne</p><br>
        <input type="text" id="nameInp" placeholder="Navn:">
        <button id="btnTestName" type="button">Se om endringer er mulig</button>
    `;
    document.getElementById("btnTestName").onclick=checkNameToObj;
}

function checkNameToObj() {
    let typeEdit = type;    
    let checkIfNameFit = () => {
        let checkNameEl = document.getElementById("nameInp").value;
        let match = false;
        pizzaMenu.getByNamePizza(checkNameEl).forEach(pizzaObject => {
            match = true;
        });

        /*The scenarios if the user chooses to add a new pizza*/
        if(typeEdit == 0){
            /*Adds a form to the page so the user can add a new pizza to the menu*/
            if(!match) {
                editFormDiv.innerHTML =`
                <p>${checkNameEl} er ikke i menyen, ønsker du fortsatt å legge til retten?</p>
                <br><input type="number" id="idInp" placeholder="ID for pizza">
                <input type="text" id="nameInp" placeholder="Navn:">
                <br><input type="number" id="priceInp" placeholder="Pris:">
                <br><input type="number" id="profitInp" placeholder="Fortjeneste per pizza:">
                <br><input type="text" id="imgInp" placeholder="Bilde navn">
                <br><input type="text" id="allergiesInp" placeholder="Allergier">
                <button id="btnTestName" type="button">Se om endringer er mulig</button>`;
                document.getElementById("btnTestName").onclick=addToObj;
            }
            /*Tells the user that the pizza exists, and asks the user to try again*/
            else {
                editFormDiv.innerHTML =`<p>${checkNameEl} finnes allerede. Prøv et annet navn.</p>
                <input type="text" id="nameInp" placeholder="Navn:">
                <button id="btnTestName" type="button">Se om endringer er mulig</button>`;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
        }        
        /*The scenarios if the user chooses to edit a pizza*/
        else if(typeEdit == 1){
            /*Gives error and asks user to type another pizza because the inputed pizza is found*/
            if(!match) {
                editFormDiv.innerHTML =`
                <p>${checkNameEl} is NOT found. TRY AGAIN</p>
                <input type="text" id="nameInp" placeholder="Navn:">
                <button id="btnTestName" type="button">Se om endringer er mulig</button>`;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
            else {
                editFormDiv.innerHTML =`<p>${checkNameEl} is  the same as ${pizzaObject.name}</p>
                <button id="cont" type="button"> ${checkNameEl}</button>`;
            }
        }
        else if(typeEdit == 2){
            if(!match) {
                editFormDiv.innerHTML =`
                <p>${checkNameEl} is NOT found. TRY AGAIN</p>
                <input type="text" id="nameInp" placeholder="Navn:">
                <button id="btnTestName" type="button">Se om endringer er mulig</button>`;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
            else {
                editFormDiv.innerHTML =`<button id="cont" type="button"> ${checkNameEl}</button>`;
            }
        }
    }
checkIfNameFit();
}

function addToObj(){
    let addIdToArrEl = document.getElementById("idInp").value;
    let addNameToArrEl = document.getElementById("nameInp").value;
    let addPriceToArrEl = document.getElementById("priceInp").value;
    let addProfitToArrEl = document.getElementById("profitInp").value;
    let addImgToArrEl = document.getElementById("imgInp").value;
    let addAllergieToArrEl = document.getElementById("allergiesInp").value;

    let item = {
        id:addIdToArrEl, name:addNameToArrEl, price:addPriceToArrEl, profit:addProfitToArrEl, img:addImgToArrEl, allergies:addAllergieToArrEl
    }
    pizzaMenu.pizzaArray.push(item);
}
/*<br><input type="number" id="idInp" placeholder="ID for pizza">

<br><input type="number" id="priceInp" placeholder="Pris:">
<br><input type="number" id="profitInp" placeholder="Fortjeneste per pizza:">
<br><input type="text" id="imgInp" placeholder="Bilde navn">
<br><input type="text" id="allergiesInp" placeholder="Allergier">
*/