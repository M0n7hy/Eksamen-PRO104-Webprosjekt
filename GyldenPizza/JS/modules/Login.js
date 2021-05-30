const UsersLogin = (function(){
    /* array med login informasjon */
    const usersLoginArray = [
        {position: "admin", email: "sigve", password: "sigve"},
        {position: "manager", email: "sanosh", password: "sanosh"},
        {position: "manager", email: "sondre", password: "sondre"},
        {position: "manager", email: "kamil", password: "kamil"},
        {position: "manager", email: "mathias", password: "mathias"},
        {position: "manager", email: "rolando", password: "rolando"},
        {position: "manager", email: "eivind", password: "eivind"}

    ];
    /* Henter array */
    const getAll = () => usersLoginArray;
    /* Henter ut fra array ved gitt posisjon */
    const getByPosition = ( position ) => {
        return usersLoginArray.filter( userLoginObject => userLoginObject.position === position);
    }
    /* Henter ut fra array ved gitt email */
    const getByEmail = (email) => {
        return usersLoginArray.filter(userLoginObject => userLoginObject.email === email);
    }
    /* Henter ut fra array ved gitt passord */
    const getByPassword = (password) => {
        return usersLoginArray.filter(userLoginObject => userLoginObject.password === password);
    }
    return {getAll, getByPosition, getByEmail, getByPassword};
}());
export default UsersLogin;