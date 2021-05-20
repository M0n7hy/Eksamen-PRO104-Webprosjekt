let personName = document.getElementById("name-div");

function logout(){
    localStorage.removeItem("level");
    localStorage.removeItem("name");
    localStorage.removeItem("workplace");
    localStorage.removeItem("page");
    location.href = "login.html";
}
function cancel(){
    location.href = localStorage.getItem("page");
}
personName.innerHTML = localStorage.getItem("name");