import restauranter from './modules/restauranter.js';

let restaurantPrintDiv = document.getElementById("infobox");

let printRestaurant = () => {
    restauranter.getAll().forEach(restaurantObject => {
        restaurantPrintDiv.innerHTML += `
            <div id="resbilde${restaurantObject.id}">${restaurantObject.img}</div>
            <div id="txtBox${restaurantObject.id}">
                <h2 id="${restaurantObject.name}">${restaurantObject.name}</h2>
                <p>${restaurantObject.description}</p>
                <p>${restaurantObject.openings}</p>
                <p><b>${restaurantObject.location}</b></p>
            </div>
        `;
    });
}
printRestaurant();