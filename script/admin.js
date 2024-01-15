const tbody = document.querySelector("tbody")

function creat(data, index){
    return `
    <tr>
        <td>${index}</td>
        <td>${data.name}e</td>
        <td>${data.description}</td>
        <td>${data.price}</td>
        <td>${data.status}</td>
        <td id="${data.id}"><svg class="delet" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            <svg class="edit" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </td>
    </tr>
`
}

document.addEventListener("DOMContentLoaded", function(){
    fetch(`https://auth-rg69.onrender.com/api/products/all`)
    .then(data => data.json())
    .then(data => {
        data.forEach((element, index) => {
            let row = creat(element, index+2)
            tbody.innerHTML += row
        });
        const delet = document.querySelectorAll(".delet")
        delet.forEach(del =>{
            del.addEventListener("click", function(){
                del.parentNode.parentNode.style.display = "none"
                let delId = this.parentNode.getAttribute("id");
                fetch(`https://auth-rg69.onrender.com/api/products/${delId}`, {
                    method: "DELETE"
                })
                .then(data => data.json())
                .catch(err=>{
                    console.log(err);
                })
            })
        })
        const edit = document.querySelectorAll(".edit")
        edit.forEach(el =>{
            el.addEventListener("click", function(){
                let edId = this.parentNode.getAttribute("id");
                fetch(`https://auth-rg69.onrender.com/api/products/${edId}`)
                .then(data => data.json())
                .then(data =>{
                    name.value = data.name
                    dec.value = data.description
                    sel.value = data.status
                    prise.value = data.price
                })
            })
        })
    })
    .catch(err =>{
        console.log(err);
    })
})

const btn = document.querySelector("#btn")
const name = document.querySelector("#name")
const dec = document.querySelector("#dec")
const sel = document.querySelector("#sel")
const prise = document.querySelector("#prise")


function val(){
    if(!name.value){
        name.focus()
        return false
    }
    if(!dec.value){
        dec.focus()
        return false
    }
    if(!sel.value){
        sel.focus()
        return false
    }
    if(!prise.value){
        prise.focus()
        return false
    }
    return true
}

btn.addEventListener("click", function(){
    if(val()){
        let data = {
            "name": `${name.value}`,
            "description": `${dec.value}`,
            "status": `${sel.value}`,
            "price": prise.value,
            "category_id": `${2}`,
        }
        name.value = ""
        dec.value = ""
        sel.value = ""
        prise.value = ""
        const post = fetch(`https://auth-rg69.onrender.com/api/products`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              }
        })

    }
})