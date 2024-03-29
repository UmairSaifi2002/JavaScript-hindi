const body = document.body;
const button = document.getElementById("button");

body.style.backgroundColor = "black";

let cardCreated = false; // Flag to track whether the card has been created

button.addEventListener("click", function() {
    if (!cardCreated) {
        beforeCreateACard();
        cardCreated = true; // Set the flag to true after creating the card
    }
}, false);

function beforeCreateACard() {
    const requestUrl = "https://api.github.com/users/UmairSaifi2002";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            const photo = data.avatar_url;
            const followers = data.followers;
            createCard(photo, followers);
        }
    };
    xhr.send();
}

function createCard(photo, followers) {
    const div = document.createElement("div");
    div.style.backgroundColor = 'grey';
    div.style.height = '90px';
    div.style.width = '90px';
    div.innerHTML = `
        <div class="Photo">
            <img src="${photo}" alt="User Photo">
        </div>
        <h2 class="content" style="background-color = 'white';">${followers}</h2>
    `;
    document.body.appendChild(div);
}
