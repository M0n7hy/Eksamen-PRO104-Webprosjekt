let loggedIn = false;
if(localStorage.getItem("level")=="admin" || localStorage.getItem("level")=="manager"){
    loggedIn = true;
}
if(!loggedIn){
    location.href = "login.html";
}
if (window.location.pathname !=="/GyldenPizza/logout.html") {
    localStorage.setItem("page", window.location.pathname);
}