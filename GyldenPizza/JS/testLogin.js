import UsersLogin from './modules/Login.js';
import Users from './modules/Users.js';
let click = document.getElementById("click");
let out = document.getElementById("output");

console.log(localStorage);
let runCheck = () => {
    let usernameDiv = document.getElementById("username-div").value;
    let passwordDiv = document.getElementById("password-div").value;
    UsersLogin.getAll().forEach(loginObject => {
        if(loginObject.email == usernameDiv && loginObject.password == passwordDiv){
            localStorage.setItem("level", loginObject.position);
            console.log(localStorage);
            Users.getByEmail(usernameDiv).forEach(userObject => {
                localStorage.setItem("name", userObject.name);
                localStorage.setItem("workplace", userObject.workplace);
            });
        }
    });
};
click.onclick = runCheck;
