const Users = (function(){
    const usersArray = [
        {name: "sigve", email: "admin", phone: "97890994", location: "norge", picture: "", workplace: "all"},
        {name: "sanosh", email: "manager1", phone: "2344354", location: "norge", picture: "", workplace: "drammen"},
        {name: "Sondre", email: "manager2", phone: "97546848", location: "norge", picture: "", workplace: "alesund"},
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""},
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""},
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""}
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