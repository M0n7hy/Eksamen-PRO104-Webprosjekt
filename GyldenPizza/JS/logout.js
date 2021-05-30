let personName = document.getElementById("name-div");
/* Sletter alt som er lagret i localestorage */
function logout(){
    localStorage.removeItem("level");
    localStorage.removeItem("name");
    localStorage.removeItem("workplace");
    localStorage.removeItem("page");
    location.href = "login.html";
}
/* Går tilbake til siden man var på dersom man velger ikke logge av */
function cancel(){
    location.href = localStorage.getItem("page");
}
/* Skriver ut navn på den som er logget inn  */
personName.innerHTML = localStorage.getItem("name");