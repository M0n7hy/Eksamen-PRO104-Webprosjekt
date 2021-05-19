import UsersLogin from './modules/Login.js';
import Users from './modules/Users.js';
let click = document.getElementById("click");

console.log(localStorage);
let runCheck = () => {
    let usernameDiv = document.getElementById("input-username").value;
    let passwordDiv = document.getElementById("input-password").value;
    UsersLogin.getAll().forEach(loginObject => {
        if(loginObject.email == usernameDiv && loginObject.password == passwordDiv){
            localStorage.setItem("level", loginObject.position);
            console.log(localStorage);
            Users.getByEmail(usernameDiv).forEach(userObject => {
                localStorage.setItem("name", userObject.name);
                localStorage.setItem("workplace", userObject.workplace);
				location.href = "main.html";
            });
        }
    });
};
click.onclick = runCheck;
