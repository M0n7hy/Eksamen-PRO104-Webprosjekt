const restauranter = (function() {

    const restaurantArray = [
        {id: 0, name:"Frogner", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 1, name:"Grünerløkka", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 2, name:"Bygdøy", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 3, name:"Aker Brygge", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
    ];

    const addRestaurant = (input) => {
        restaurantArray.push(input);
    }

    const removeRestaurant = (remove) => {
        for (let i = 0; i < restaurantArray.length; i++) {
            if(restaurantArray[i].id == remove) {
                restaurantArray.splice(i, 1);
                break;
            }
        }
    }

    const editRestaurant = (edit, item, change) => {
        for (let i = 0; i < restaurantArray.length; i++) {
            if(restaurantArray[i].id == edit) {
                switch (item) {
                    case "name":
                        restaurantArray[i].name = change;
                        break;
                    case "description":
                        restaurantArray[i].description = change;
                        break;
                    case "openings":
                        restaurantArray[i].openings = change;
                        break;
                    case "address":
                        restaurantArray[i].location = change;
                        break;
                    case "image":
                        restaurantArray[i].img = change;
                }
            }
        }
    }
    
    const getAll = () => restaurantArray;

    const getById = (id) => {
        return restaurantArray.filter(restObject => restObject.id === id);
    }

    const getByName = (name) => {
        return restaurantArray.filter(restObject => restObject.name === name);
    }

    const getByLocation = (name) => {
        return restaurantArray.filter(restObject => restObject.location === location);
    }

    return {getAll, getById, getByName, getByLocation, addRestaurant, removeRestaurant, editRestaurant};
}());
export default restauranter;