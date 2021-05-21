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
            <div id="${user.id}" class="users-div span-1-of-4">
                <div class="name">${user.name}</div>
                <img style="width: 100%" src="${user.picture}" alt="">
                <div class="email info">Email: ${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>`;
            count++;
    });

    Users.getAll().forEach(user =>{
        document.getElementById(`${user.id}`).addEventListener("click", printTest);

        function printTest() {
            alert(`Hei, ${user.name}. Ditt telefonnr er ${user.phone} og Sigve suger!`);
        }
    });
    userCount.innerHTML = `${count} ansatte`;
}
search.addEventListener('input', (event) =>{
    let value = event.target.value;
    usersOutput.innerHTML="";
    let filtered = Users.getAll().filter(user => user.name.includes(value));
    
    filtered.forEach(user => {
        usersOutput.innerHTML +=`
            <div alt="${user.email}" class="users-div span-1-of-4" onclick="test()">
                <div class="name">${user.name}</div>
                <img style="width: 100%" src="${user.picture}" alt="">
                <div class="email info">Email: ${user.email}</div>
                <div class="phone info">Tlf: ${user.phone}</div>
                <div class="location info">Hjem: ${user.location}</div>
                <div class="workplace info">Arbeidsplass: ${user.workplace}</div>
            </div>
            `;
    });
})
printEmployees();