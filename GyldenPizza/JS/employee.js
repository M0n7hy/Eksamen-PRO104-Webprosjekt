import Users from './modules/Users.js';
let userCount = document.getElementById("number-of-users");
let search = document.getElementById("search");
let usersOutput = document.getElementById("users-output");
//count.innerHTML = Users.getAll.length + 1;
let printEmployees = () => {
    let count = 0;
    Users.getAll().forEach(user => {
        usersOutput.innerHTML +=
            `
            <div class="users-div">
                <div class="name">${user.name}</div>
                <img style="width: 100%" src="${user.picture}" alt="">
                <div class="email info">Email: ${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>`;
            count++;
    });
    userCount.innerHTML = `${count} ansatte`;
}
search.addEventListener('input', (event) =>{
    const value = event.target.value;
    usersOutput.innerHTML="";
    const filtered = Users.getAll().filter(user => user.name.includes(value));
    
    filtered.forEach(user => {
        usersOutput.innerHTML += `
            <div class="users-div">
            <div class="name">${user.name}</div>
            <img style="width: 100%" src="${user.picture}" alt="">
            <div class="email info">Email: ${user.email}</div>
            <div class="phone info">Tlf: ${user.phone}</div>
            <div class="location info">Hjem: ${user.location}</div>
            <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>
        `;
        
        console.log(user.name);
    });
})
printEmployees();