const pizzaMenu = (function() {
//Object for the menu, with info about name, size, price, profitt, images and allergies
const pizzaArray = [
    { id: 0, name:"Classic Margarita", size:"Small", price: 120, profitt:60, img: "resources/images/", allergies: "Gulten, Milk"},
    { id: 1, name:"Large Classic Margarita", size:"Large", price: 155, profitt:75, img:"resources/images", allergies:"Gluten, Milk"},
    { id: 2, name:"Pepperoni Pizza", size:"Small", price: 140, profitt:70, img:"resources/images", allergies:"Gluten, Milk, Pork"},
    { id: 3, name:"Large Pepperoni", size:"Large", price: 175, profitt:95, img:"resources/images", allergies:"Gluten, Milk, Pork"},
    { id: 4, name:"Kebaba Pizza", size:"small", price: 160, profitt:75, img:"resources/images", allergies:"Gluten, Milk"},
    { id: 5, name:"Large Kebaba Pizza", size:"Large", price: 180, profitt:110, img:"resources/images", allergies:"Gluten, Milk"}
    ];

    const getAll = () => pizzaArray;

    const getById = (id) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.id === id);
    }
    const getByName = (name) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.name === name);
    }
    const getBySize = (size) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.size === size);
    }
    const getByPrice = (price) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.price === price);
    }
    const getByProfitt = (profitt) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.profitt === profitt);
    }
    return {getAll, getById, getByName, getBySize, getByPrice, getByProfitt};
});