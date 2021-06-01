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
    menuPrintPizzaDiv.innerHTML =``;
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
                            <a id="sizeStor">Stor</a>
                            <a id="sizeMedium">Medium</a>
                            <a id="sizeLiten">Liten</a>
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
            `<div id="element-soda">
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
        <br><p class="inp-firstStg">Legg inn navn på pizzaen du ønsker å legge til:</p><br>
        <div class="flex-box">
            <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:">
            <button id="btnTestName" class="btn-flex" type="button">Sjekk om pizzaen finnes</button>
        </div>
    `;
    document.getElementById("btnTestName").onclick=checkNameToObj;
}


document.getElementById("menu-edit-btn-edit").onclick=edit;
function edit() {
    type = 1;
    editFormDiv.innerHTML =`
        <br><p class="inp-firstStg">Legg inn navn på pizzaen du ønsker å gjøre endringer på:</p><br>
        <div class="flex-box">
            <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:">
            <button id="btnTestName" class="btn-flex" type="button">Sjekk om pizzaen finnes</button>
        </div>
    `;
    document.getElementById("btnTestName").onclick=checkNameToObj;
}

document.getElementById("menu-edit-btn-remove").addEventListener("click", remove);
function remove() {
    type = 2;
    console.log("remove");
    editFormDiv.innerHTML =`
        <br><p class="inp-firstStg">Legg inn navn på pizzaen du ønsker å fjerne:</p><br>
        <div class="flex-box">
            <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:">
            <button id="btnTestName" class="btn-flex" type="button">Sjekk om pizzaen finnes</button>
        </div>
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
                    <p class="inp-firstStg">${checkNameEl} er ikke i menyen, ønsker du fortsatt å legge til retten?</p>
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
                editFormDiv.innerHTML =`
                    <p class="inp-firstStg">${checkNameEl} finnes allerede! Prøv et annet navn:</p>
                    <div class="flex-box">
                        <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:" style="flex-grow: 8">
                        button id="btnTestName" class="btn-flex" type="button" style="flex-grow: 1">Sjekk om pizzaen finnes</button>
                    </div>
                    `;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
        }        
        /*The scenarios if the user chooses to edit a pizza*/
        else if(typeEdit == 1){
            /*Gives error and asks user to type another pizza because the inputed pizza is found*/
            if(!match) {
                editFormDiv.innerHTML =`
                    <p class="inp-firstStg">${checkNameEl} is NOT found. TRY AGAIN</p>
                    <div class="flex-box">
                        <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:" style="flex-grow: 8">
                        <button id="btnTestName" class="btn-flex" type="button" style="flex-grow: 1">Sjekk om pizzaen finnes</button>
                    </div>
                    `;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
            else {
                editFormDiv.innerHTML =`
                    <p class="inp-firstStg">${checkNameEl} finnes i menyen, legg inn endringer her:</p>
                    <br><input type="number" id="idInp" placeholder="ID for pizza">
                    <input type="text" id="nameInp" placeholder="Navn:">
                    <br><input type="number" id="priceInp" placeholder="Pris:">
                    <br><input type="number" id="profitInp" placeholder="Fortjeneste per pizza:">
                    <br><input type="text" id="imgInp" placeholder="Bilde navn">
                    <br><input type="text" id="allergiesInp" placeholder="Allergier">
                    <button id="btnTestName" type="button">Se om endringer er mulig</button>`;
                document.getElementById("btnTestName").onclick=addToObj;
            }
        }
        else if(typeEdit == 2){
            if(!match) {
                editFormDiv.innerHTML =`
                    <p class="inp-firstStg">${checkNameEl} is NOT found. TRY AGAIN</p>
                    <div class="flex-box">
                        <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:" style="flex-grow: 8">
                        <button id="btnTestName" class="btn-flex" type="button">Sjekk om pizzaen finnes</button>
                    </div>    
                    `;
                document.getElementById("btnTestName").onclick=checkNameToObj;
            }
            else {
                let nameOfObj = checkNameEl.value;
                editFormDiv.innerHTML =`
                <button id="cont" type="button" onclick="removeFromObj(${nameOfObj})">${checkNameEl} er funnet! Ønsker du å fjerne den?</button>`;
            }
        }
    }
checkIfNameFit();
}

function addToObj(){
    let addIdToArrEl = pizzaMenu.arrayLength.value;
    let addNameToArrEl = document.getElementById("nameInp").value;
    let addPriceToArrEl = document.getElementById("priceInp").value;
    let addProfitToArrEl = document.getElementById("profitInp").value;
    let addImgToArrEl = "none.png";
    let addAllergieToArrEl = document.getElementById("allergiesInp").value;

    console.log(pizzaMenu.arrayLength.value);
    let item = {
        id:addIdToArrEl, name:addNameToArrEl, price:addPriceToArrEl, profit:addProfitToArrEl, img:addImgToArrEl, allergies:addAllergieToArrEl
    }
    pizzaMenu.pizzaArray.push(item);

    printMenuPizza();
}

window.removeFromObj = (b) =>{
    pizzaMenu.getByNamePizza(b).forEach(pizzaObject => {
        pizzaMenu.splice(pizzaObject, 1);
    });

    printMenuPizza();
}

document.getElementById(sizeStor).onclick=sizeS;
document.getElementById(sizeMedium).onclick=sizeM;
document.getElementById(sizeLiten).onclick=sizeL;
let sizeTypeNr;
function sizeS(){
    let sizeTypeNr = 0;
    editPrice();
}
function sizeM(){
    let sizeTypeNr = 1;
    editPrice();
}
function sizeL(){
    let sizeTypeNr = 2;
    editPrice();
}
function editPrice() {
    if(sizeTypeNr == 0){

    }
    else if(sizeTypeNr == 1){

    }
    else if(sizeTypeNr == 2){
        
    }
}
/*<br><input type="number" id="idInp" placeholder="ID for pizza">

<br><input type="number" id="priceInp" placeholder="Pris:">
<br><input type="number" id="profitInp" placeholder="Fortjeneste per pizza:">
<br><input type="text" id="imgInp" placeholder="Bilde navn">
<br><input type="text" id="allergiesInp" placeholder="Allergier">
*/