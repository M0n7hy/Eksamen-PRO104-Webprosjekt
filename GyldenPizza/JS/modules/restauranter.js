const restauranter = (function() {

    const restaurantArray = [
        {id: 0, name:"Frogner", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 1, name:"Grünerløkka", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.",openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 99, 0565 Oslo", img:""},
        {id: 2, name:"Bygdøy", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 98, 0565 Oslo", img:""},
        {id: 3, name:"Aker Brygge", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 97, 0565 Oslo", img:""},
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
                    case "desc":
                        restaurantArray[i].description = change;
                        break;
                    case "open1":
                        restaurantArray[i].openings11 = change;
                        break;
                    case "open2":
                        restaurantArray[i].openings12 = change;
                        break;
                    case "open3":
                        restaurantArray[i].openings21 = change;
                        break;
                    case "open4":
                        restaurantArray[i].openings22 = change;
                        break;
                    case "address":
                        restaurantArray[i].location = change;
                        break;
                    case "img":
                        restaurantArray[i].img = change;
                        break;
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

    const getByLocation = (location) => {
        return restaurantArray.filter(restObject => restObject.location === location);
    }

    return {getAll, getById, getByName, getByLocation, addRestaurant, removeRestaurant, editRestaurant};
}());
export default restauranter;