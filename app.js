let boxcards = document.getElementById("cards");

let API = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="card">
                    <div class="profile-image">
                        <img src="${element.avatar}" alt="">
                    </div>
                    <div class="card-content">
                        <h2>${element.first_name} ${element.last_name}</h2>
                        <h3>${element.email}</h3>
                        <h3>User Id: ${element.id}</h3>
                    </div>
                </div>`;
        })
        .join("");

    boxcards.innerHTML = info;
};

let Btn = document.getElementById("user");
Btn.addEventListener("click", () => {
    cards.innerHTML = `<h1 class="loading">Loading User data...</h1>`;
    setTimeout(() => {
        API();
    }, 3000);
});