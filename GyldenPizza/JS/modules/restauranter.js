const restauranter = (function() {

    const restaurantArray = [
        {id: 0, name:"Frogner", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 1, name:"Grünerløkka", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 2, name:"Bygdøy", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 3, name:"Aker Brygge", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
    ];
    
    const getAll = () => restaurantArray;

    return {getAll};
}());
export default restauranter;