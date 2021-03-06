const Users = (function(){
    /* Lager array med brukere */
    const usersArray = [
        {id:0, name: "Sigve Berg Langva", email: "sigve", phone: "97890994", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "all", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:1, name: "Sanosh", email: "sanosh", phone: "23443549", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "drammen", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:2, name: "Sondre", email: "sondre", phone: "97546848", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "alesund", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:3, name: "Kamil", email: "kamil", phone: "12433453", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:4, name: "Mathias", email: "mathias", phone: "12345678", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:5, name: "Rolando", email: "rolando", phone: "98765432", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."},
        {id:6, name: "Eivind", email: "eivind", phone: "55556666", location: "norge", picture: "https://scontent.fosl4-2.fna.fbcdn.net/v/t1.18169-9/23130973_10154823178672687_2523489635196198363_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QRSsTxJxGrIAX8BjxAt&_nc_ht=scontent.fosl4-2.fna&oh=d46efb00fa388c55b2eeff7830e88844&oe=60CD33EF", workplace: "oslo", info: "loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo quae est, deserunt nam sit nemo dolor, eos totam incidunt in aut recusandae ex itaque cupiditate nisi, expedita similique placeat."} 
    ];
    /* Funksjon for ?? legge til brukere */
    const addUser = (input) =>{
        usersArray.push(input);
    }
    /* Funksjon for ?? fjerne brukere */
    const removeUser = (remove) =>{
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].id == remove) {
                usersArray.splice(i, 1);
                break;
            }
        }
    }
    /* Funksjon for ?? endre brukere */
    const editUser = (edit, item, change) =>{
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].id == edit){
                switch (item) {
                    case "name":
                        usersArray[i].name = change;
                        break;
                    case "email":
                        usersArray[i].email = change;
                        break;
                    case "phone":
                        usersArray[i].phone = change;

                        break;
                    case "picture":
                        usersArray[i].picture = change;
                        break;
                    case "location":
                        usersArray[i].location = change;
                        break;
                    case "workplace":
                        usersArray[i].workplace = change;
                        break;
                    case "info":
                        usersArray[i].info = change;
                        break;
                }
            }
        }
    }
    /* Henter ut hele arrayet */
    const getAll = () => usersArray;

    /* Henter ut alt fra array med valgt id */
    const getById = ( id ) => {
        return usersArray.filter( userObject => userObject.id === id);
    }
    /* Henter ut array lengde */
    const length = ( usersArray.length );

      /* Henter ut alt fra array med valgt navn */
    const getByName = ( name ) => {
        return usersArray.filter( userObject => userObject.name === name);
    }
      /* Henter ut alt fra array med valgt email(For mulig fremtidig bruk) */
    const getByEmail = (email) => {
        return usersArray.filter(userObject => userObject.email === email);
    }
      /* Henter ut alt fra array med valgt telefon nummer(For mulig fremtidig bruk)  */
    const getByPhone = (phone) => {
        return usersArray.filter(userObject => userObject.phone === phone);
    }
      /* Henter ut alt fra array med valgt arbeidsplass(For mulig fremtidig bruk)  */
    const getByWorkplace = (workplace) => {
        return usersArray.filter(userObject => userObject.workplace === workplace);
    }
    /* Returnerer alle funksjoner */
    return {getAll, getById, length, getByName, getByEmail, getByPhone, getByWorkplace, addUser, removeUser, editUser};
 }());
 export default Users;