const Users = (function(){
    const usersArray = [
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""},
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""},
        {name: "", email: "", phone: "", location: "", picture: "", workplace: ""},
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