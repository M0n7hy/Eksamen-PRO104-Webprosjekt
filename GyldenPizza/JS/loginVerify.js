let loggedIn = false;
/*  Sjekker om du er pålogget om du ikke er det så blir du sendt til login */
if(localStorage.getItem("level")=="admin" || localStorage.getItem("level")=="manager"){
    loggedIn = true;
}
if(!loggedIn){
    location.href = "login.html";
}
/* Lagrer siden du var på sist 
så du kommer tilbake til den du var på om du velger å ikke logge ut alikevel */
if (window.location.pathname !=="/GyldenPizza/logout.html") {
    localStorage.setItem("page", window.location.pathname);
}