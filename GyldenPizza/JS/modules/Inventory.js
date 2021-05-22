const pizzaMenu = (function() {

    //Object for the menu, with info about name, size, price, profitt, images and allergies
    const pizzaArray = [
        { id: 0, name:"Pepperoni Pizza", price: 140, profit:70, img:"Pepperoni.png", allergies:"Gluten, Milk"},
        { id: 1, name:"Kebab Pizza", price: 150, profit:75, img:"Kebab.png", allergies:"Gluten, Milk"},
        { id: 2, name:"Taco Pizza", price:150, profit:70, img:"Tacopizza.png", allergies:"Gluten, Milk"},
        { id: 3, name:"The OG", price:145, profit:70, img:"Klassikeren.png", allergies:"Gluten, Milk"},
        { id: 4, name:"Beef Pizza", price:155, profit:65, img:"Biffpizza.png", allergies:"Gluten, Milk"},
        { id: 5, name:"Cheddar Dream", price:130, profit:85, img:"Cheddar.png", allergies:"Gluten, Milk"},
        { id: 6, name:"Classic Margarita", price: 120, profit:60, img:"Margarita.png", allergies: "Gulten, Milk"},
        { id: 7, name:"Pizza Pollo", price:145, profit:70, img:"Pollo.png", allergies:"Gluten, Milk"},
        { id: 8, name:"Pizza Parma", price:135, profit:80, img:"Parma.png", allergies:"Gluten, Milk"}
    ];

    const drinkArray = [
        { id: 0, name:"Coca-Cola", price:40, profit:20, img:"ColaLogo.png"},
        { id: 1, name:"Fanta Mango", price:40, profit:20, img:"FantaMango.jpg"},
        { id: 2, name:"Cola Cinnamon", price:40, profit:20, img:"ColaCinnamon.png"},
        { id: 3, name:"Oskar Sylte PearSoda", price:30, profit:10, img:"Pærebrus.png"},
    ]

    const getAllPizza = () => pizzaArray;

    const getByNamePizza = (name) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.name === name);
    }

    const getByPricePizza = (price) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.price === price);
    }

    const getByProfitPizza = (profit) => {
        return pizzaArray.filter(pizzaObject => pizzaObject.profit === profit);
    }

    const getAllDrinks = () => drinkArray;

    const getByNameDrinks = (name) => {
        return drinkArray.filter(drinkObject => drinkObject.name === name);
    }

    const getByPriceDrinks = (price) => {
        return drinkArray.filter(drinkObject => drinkObject.price === price);
    }

    const getByProfitDrinks = (profit) => {
        return drinkArray.filter(drinkObject => drinkObject.profit === profit);
    }
    
    return {getAllPizza, getByNamePizza, getByPricePizza, getByProfitPizza, getAllDrinks, getByNameDrinks, getByPriceDrinks, getByProfitDrinks};
}());
export default pizzaMenu;