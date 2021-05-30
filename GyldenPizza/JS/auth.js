import UsersLogin from './modules/Login.js';
import Users from './modules/Users.js';
let click = document.getElementById("click");

console.log(localStorage);
/* Sjekker gjennom array om brukernavn og passord matcher 
og lagrer brukeren i local storage for senere bruk
(Kobler email fra login Module til users Module dersom Brukernavn og passord stemmer med hverandre og lagrer info vi trenger) */
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
/* sjekker login om man trykker enter */
document.getElementById("input-password").addEventListener('keypress', (event) => {
	var name = event.key;
	if (name == "Enter") {
		runCheck();
	}
});