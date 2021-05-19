const UsersLogin = (function(){
    const usersLoginArray = [
        {position: "admin", email: "admin", password: "admin"},
        {position: "manager", email: "manager1", password: "manager"},
        {position: "manager", email: "manager2", password: "manager"},
        {position: "manager", email: "manager3", password: "manager"}
    ];
    const getAll = () => usersLoginArray;

    const getByPosition = ( position ) => {
        return usersLoginArray.filter( userLoginObject => userLoginObject.position === position);
    }
    const getByEmail = (email) => {
        return usersLoginArray.filter(userLoginObject => userLoginObject.email === email);
    }
    const getByPassword = (password) => {
        return usersLoginArray.filter(userLoginObject => userLoginObject.password === password);
    }
    return {getAll, getByPosition, getByEmail, getByPassword};
}());
export default UsersLogin;