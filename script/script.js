import { createCard } from "./function.js";

const wrapper = document.getElementById("wrapper")


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
          let allButtons = document.querySelectorAll('button#in-detail')
          allButtons.length && allButtons.forEach(btn => {
              btn.addEventListener("click",function(){
                  let elId = this.getAttribute('id').substring(8)
                  if (elId) {
                      window.location.assign(`../pages/detail.html?id=${elId}`)
                  }
              })
          })
    })
    .catch(err => { 
        wrapper.innerHTML = "Ma'lumotlar mavjud emas"
        console.log(err);
    })
});