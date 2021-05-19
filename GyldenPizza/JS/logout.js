function logout(){
    localStorage.removeItem("level");
    localStorage.removeItem("name");
    localStorage.removeItem("workplace");
    location.href = "login.html";
}