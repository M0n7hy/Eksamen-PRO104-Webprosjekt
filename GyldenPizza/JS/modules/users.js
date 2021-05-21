const Users = (function(){
    const usersArray = [
        {id:"a00", name: "Sigve Berg Langva", email: "sigve", phone: "97890994", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "all"},
        {id:"a01", name: "Sanosh", email: "sanosh", phone: "23443549", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "drammen"},
        {id:"a02", name: "Sondre", email: "sondre", phone: "97546848", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "alesund"},
        {id:"a03", name: "Kamil", email: "kamil", phone: "12433453", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo"},
        {id:"a04", name: "Mathias", email: "mathias", phone: "12345678", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo"},
        {id:"a05", name: "Rolando", email: "rolando", phone: "98765432", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo"},
        {id:"a06", name: "Eivind", email: "eivind", phone: "55556666", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo"} 
    ];

    const getAll = () => usersArray;

    const getById = ( id ) => {
        return usersArray.filter( userObject => userObject.id === id);
    }

    const length = ( usersArray.length );

    const getByName = ( name ) => {
        return usersArray.filter( userObject => userObject.name === name);
    }
    const getByEmail = (email) => {
        return usersArray.filter(userObject => userObject.email === email);
    }
    const getByPhone = (phone) => {
        return usersArray.filter(userObject => userObject.phone === phone);
    }
    const getByWorkplace = (workplace) => {
        return usersArray.filter(userObject => userObject.workplace === workplace);
    }
    return {getAll, getById, length, getByName, getByEmail, getByPhone, getByWorkplace};
 }());
 export default Users;