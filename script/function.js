function createCard(phone) {
    return `
    <div class="child1 col-4">
    <img src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE="
        alt="hotel" width="260px">
    <h3><small class= "fs-5">nomi: </small>${phone.name}</h3>
    
    <p>narxi: ${phone.price}$</p>
    <p>izoh: ${phone.description.length ? phone.description : "Bu mahsulot bo'yicha qoshimcha malumotlar mavjud emas"}</p>
    <button class="t in-detail" id="element_${phone.id}">Batafsil</button>
</div>


    `
}


export{createCard}