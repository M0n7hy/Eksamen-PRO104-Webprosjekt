const pizzaMenu = (function() {

    //Object for the menu, with info about name, size, price, profitt, images and allergies
    const pizzaArray = [
        { id: 0, name:"Classic Margarita", price: 120, profit:60, img: "", allergies: "Gulten, Milk"},
        { id: 1, name:"Pepperoni Pizza", price: 140, profit:70, img:"", allergies:"Gluten, Milk, Pork"},
        { id: 2, name:"Kebaba Pizza", price: 150, profit:75, img:"", allergies:"Gluten, Milk"},
    ];

    const drinkArray = [
        { id: 0, name:"Cola", price:40, profit:20, img:""},
        { id: 1, name:"Fanta Mango", price:40, profit:20, img:""},
        { id: 2, name:"Cola Cinnamon", price:40, profit:20, img:""},
        { id: 3, name:"Oskar Sylte PearSoda", price:30, profit:10, img:""},
    ]

    const getAll = () => pizzaArray;

    const getByName = (name) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.name === name);
    }

    const getByPrice = (price) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.price === price);
    }

    const getByProfit = (profit) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.profit === profit);
    }
    
    return {getAll, getById, getByName, getByPrice, getByProfit};
}());
export default pizzaMenu;