function createCard(phone) {
    return `
        <div class="card col-4" style="width: 18rem;">
            <div class="card-body">
                <h5><small>nomi: </small>${phone.name}</h5>
                <p><small>izoh: </small>${phone.description}</p>
                <p><small>narxi: </small>${phone.price}$</p>
                <button class="btn btn-primary in-detail" id= "element_${phone.id}">Batafsil</button>
            </div>
        </div>

    `
}


export{createCard}