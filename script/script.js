const wrapper = document.getElementById("wrapper")

function createCard(phone) {
    return `

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">${phone.description}</p>
                <p class="card-text">${phone.price}</p>
                <a href="#" class="btn btn-primary">Batafsil</a>
            </div>
        </div>

    `
}

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method:"GET"
    })
    .then(res => res.json())
    .then (data => {
        if (data.length) {
            data.forEach(phone => {
                let card = createCard(phone);
                wrapper.innerHTML += card;
            });
        }
    })
    .catch(err => { 
        console.log(err);
    })
});