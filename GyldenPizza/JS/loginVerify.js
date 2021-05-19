if(localStorage.getItem("level")!=="admin" || localStorage.getItem("level")==!"manager"){
    location.href = "login.html";
}