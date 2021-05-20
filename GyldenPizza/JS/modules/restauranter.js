const restauranter = (function() {

    const restaurantArray = [
        {id: 0, name:"Frogner", description:"", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 1, name:"Grünerløkka", description:"", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 2, name:"Bygdøy", description:"", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
        {id: 3, name:"Aker Brygge", description:"", openings:"<b>Man-Ons</b> 10:00 - 20:00<br><b>Tors-Lør</b> 12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:""},
    ];

    const getAll = () => restaurantArray;

    return {getAll};
}());
export default restauranter;