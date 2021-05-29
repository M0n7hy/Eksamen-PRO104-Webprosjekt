const restauranter = (function() {

    const restaurantArray = [
        {id: 0, name:"Frogner", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 100, 0565 Oslo", img:"https://media-cdn.tripadvisor.com/media/photo-s/07/0a/ef/55/cafe-elise.jpg"},
        {id: 1, name:"Grünerløkka", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.",openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 99, 0565 Oslo", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRnblwlreNSTthjwc4Iz7pwgTwGGpPFIReA&usqp=CAU"},
        {id: 2, name:"Bygdøy", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 98, 0565 Oslo", img:"https://images.squarespace-cdn.com/content/v1/5ca1e8fefb22a55a0adcfeaa/1556259600611-ZW7MEEW9EC2P9568KA51/ke17ZwdGBToddI8pDm48kFkbucntuNyhkmX_Idjol8F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQdlv89pJUA40LnCaYoEXIz4J3pt_OVcUv0eyaQ0ENCwHgPoHV4cLej6Nf1UIg0oNw/Bygdoy-alle-3-%238-ps.jpg?format=1500w"},
        {id: 3, name:"Aker Brygge", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, repellendus mollitia et provident porro nobis quisquam? Sint voluptates necessitatibus cum, debitis vitae iure facilis voluptatibus amet porro ad consequatur eos laboriosam. Officia, doloribus. Dolorum fuga officiis nam quisquam aliquid magni, quibusdam, deleniti excepturi quidem hic corrupti nemo minima laborum enim.", openings11:"Man-Ons", openings12:"10:00 - 20:00", openings21:"Tors-Lør", openings22:"12:00 - 24:00", location:"Trondheimsveien 97, 0565 Oslo", img:"https://tellusdmsmedia.newmindmedia.com/wsimgs/Olivia-Tjuvholmen_2_91221234.jpg[WallImage][4C1B7A10A6C237D1438CFE724F19EB7130]"},
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