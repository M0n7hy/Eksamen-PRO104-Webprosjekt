const Users = (function(){
    const usersArray = [
        {name: "Sigve Berg Langva", email: "sigve", phone: "97890994", location: "norge", picture: "", workplace: "all"},
        {name: "Sanosh", email: "sanosh", phone: "23443549", location: "norge", picture: "", workplace: "drammen"},
        {name: "Sondre", email: "sondre", phone: "97546848", location: "norge", picture: "", workplace: "alesund"},
        {name: "Kamil", email: "kamil", phone: "12433453", location: "norge", picture: "", workplace: "oslo"},
        {name: "Mathias", email: "mathias", phone: "12345678", location: "norge", picture: "", workplace: "oslo"},
        {name: "Rolando", email: "rolando", phone: "98765432", location: "norge", picture: "", workplace: "oslo"},
        {name: "Eivind", email: "eivind", phone: "55556666", location: "norge", picture: "", workplace: "oslo"}

    ];

    const getAll = () => usersArray;

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
    return {getAll, getByName, getByEmail, getByPhone, getByWorkplace};
 }());
 export default Users;