import pizzaMenu from './modules/Inventory.js';

//Gets the three important
let menuPrintPizzaDiv = document.getElementById("print-menu-pizza");
let menuPrintDrinkDiv = document.getElementById("print-menu-drinks");
let editFormDiv = document.querySelector(".edit-form");

function printMenu(){
    printMenuPizza();
    printMenuDrinks();
}

//Prints out all the pizzas
let printMenuPizza = () => {
    menuPrintPizzaDiv.innerHTML =``;
    pizzaMenu.getAllPizza().forEach(pizzaObject => {
        menuPrintPizzaDiv.innerHTML +=
            `<div id="element">
                <h2>${pizzaObject.name}</h2>
                <h3 class="pizzaPrice" id="pizzaPrice">${pizzaObject.price}kr</h3>
                <img id="pic-pizza" src="resources/images-pizza/${pizzaObject.img}">
                <p class="sizeEl" id="sizeEl">Size</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="test">Allergies: ${pizzaObject.allergies}</p>
            </div>`;
    });
}

//Prints out all the drinks
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

//Type of edit
let type;

//Function for printing out the first part of adding a new item to the pizza menu
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

//Function for printing out the first part of editing an item from the pizza menu
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

//Function for printing out the first part of removing an item from the pizza menu
document.getElementById("menu-edit-btn-remove").addEventListener("click", remove);
function remove() {
    type = 2;
    editFormDiv.innerHTML =`
        <br><p class="inp-firstStg">Legg inn navn på pizzaen du ønsker å fjerne:</p><br>
        <div class="flex-box">
            <input type="text" id="nameInp" class="inp-flex" placeholder="Navn:">
            <button id="btnTestName" class="btn-flex" type="button">Sjekk om pizzaen finnes</button>
        </div>
    `;
    document.getElementById("btnTestName").onclick=checkNameToObj;
}

/*Function that checks if the inputed name is in the pizza menu or not.
With this information and the information on which type of edit the user wants to do,
the fuction/system determins and prints out the appropriate stage*/
function checkNameToObj() {
    let typeEdit = type;    
    let checkIfNameFit = () => {
        let checkNameEl = document.getElementById("nameInp").value;
        let match = false;
        pizzaMenu.getByNamePizza(checkNameEl).forEach(pizzaObject => {
            match = true;
        });

        //The scenarios if the user chooses to add a new pizza
        if(typeEdit == 0){
            //Adds a form to the page so the user can add a new pizza to the menu
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
            //Tells the user that the pizza exists, and asks the user to try again
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
        //The scenarios if the user chooses to edit a pizza
        else if(typeEdit == 1){
            //Gives error and asks user to type another pizza because the inputed pizza is found
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
            //Prints a set of input fields so the user can edit the a pizza on the menu
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
        //The scenarios if the user chooses to remove a pizza
        else if(typeEdit == 2){
            //Gives error and asks user to type another pizza because the inputed pizza is found
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
            //Confirmation button, sends the information to function "removeFromObj()"
            else {
                let nameOfObj = checkNameEl.value;
                editFormDiv.innerHTML =`
                <button id="cont" type="button" onclick="removeFromObj(${nameOfObj})">${checkNameEl} er funnet! Ønsker du å fjerne den?</button>`;
            }
        }
    }
checkIfNameFit();
}

//Function for adding the inputted values from the users in to the menu
function addToObj(){
    let addIdToArrEl = pizzaMenu.arrayLength.value;
    let addNameToArrEl = document.getElementById("nameInp").value;
    let addPriceToArrEl = document.getElementById("priceInp").value;
    let addProfitToArrEl = document.getElementById("profitInp").value;
    let addImgToArrEl = "none.png";
    let addAllergieToArrEl = document.getElementById("allergiesInp").value;

    let item = {
        id:addIdToArrEl, name:addNameToArrEl, price:addPriceToArrEl, profit:addProfitToArrEl, img:addImgToArrEl, allergies:addAllergieToArrEl
    }
    pizzaMenu.pizzaArray.push(item);

    printMenuPizza();
}

//Removes inputted pizza from the menu
window.removeFromObj = (b) =>{
    pizzaMenu.getByNamePizza(b).forEach(pizzaObject => {
        pizzaMenu.splice(pizzaObject, 1);
    });

    printMenuPizza();
}

document.getElementById("price-edit-btn-large").onclick=sizeS;
document.getElementById("price-edit-btn-medium").onclick=sizeM;
document.getElementById("price-edit-btn-small").onclick=sizeL;



let sizeTypeNr;

function sizeS(){
    sizeTypeNr = 0;
    editPrice();
}
function sizeM(){
    sizeTypeNr = 1;
    editPrice();
}
function sizeL(){
    sizeTypeNr = 2;
    editPrice();
}
let newPrice;
//Function to edit price and size
function editPrice() {
    if(sizeTypeNr == 0){
        pizzaMenu.getAllPizza().forEach(pizzaObject => {
            let priceEl = document.querySelectorAll("#pizzaPrice");
            let sizeEdit = document.querySelectorAll("#sizeEl");

            for (let i = 0; i <priceEl.length; i++){
                newPrice = (priceEl[i].value);
                priceEl[i].innerHTML = `${newPrice}kr`;
                sizeEdit[i].innerHTML = `Stor`;
            }
        });
    }
    else if(sizeTypeNr == 1){
        pizzaMenu.getAllPizza().forEach(pizzaObject => {
            let priceEl = document.querySelectorAll("#pizzaPrice");
            let sizeEdit = document.querySelectorAll("#sizeEl");

            for (let i = 0; i <priceEl.length; i++){
                let priceM = pizzaObject.price;
                priceEl[i].innerHTML = `${priceM}kr`;
                sizeEdit[i].innerHTML = `Medium`;
            }
        });
    }
    else if(sizeTypeNr == 2){
        pizzaMenu.getAllPizza().forEach(pizzaObject => {
            console.log("123");
            let priceS = (pizzaObject.price)*0.8;
            priceEl.innerHTML = `${priceS}kr`;
            sizeEdit.innerHTML = `Liten`;
        });
    }
}
/*<br><input type="number" id="idInp" placeholder="ID for pizza">

<br><input type="number" id="priceInp" placeholder="Pris:">
<br><input type="number" id="profitInp" placeholder="Fortjeneste per pizza:">
<br><input type="text" id="imgInp" placeholder="Bilde navn">
<br><input type="text" id="allergiesInp" placeholder="Allergier">
*/