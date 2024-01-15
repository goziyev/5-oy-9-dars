const bigCard = document.getElementById("card")

function createCard(data) {
  return `
  <div class="containerA">
  <img
   src="https://picsum.photos/300/300"
   alt="Pancake"
  />
  <div class="container__text">
   <h1>${data.name}</h1>
   <div class="container__text__star">

    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
   </div>
   <p>
   ${data.description && data.description.length ? data.description : "Bu mahsulot boyicha qo'shimcha maulotlar mavjud emas"}
   </p>
   <div class="container__text__timing">
    <div class="container__text__timing_time">
     <h2>Narxi</h2>
     <p>${data.price}$</p>
    </div>
    <div class="container__text__timing_time">
     <h2>Category id</h2>
     <p>${data.category_id}</p>
    </div>
    
   </div>
   <button class="btn location btn-outline-danger" id="back">Ortga</button>
   <button class="btn btnA js-confetti" >Sotib olish <i class="fa fa-arrow-right"></i></button>
  </div>
 </div>
 
  `
}


document.addEventListener("DOMContentLoaded", function () {
  let elId = window.location.href.substring(58);
  if (elId && elId.length == 36) {
    fetch(`https://auth-rg69.onrender.com/api/products/${elId}`)
      .then((res) => res.json())
      .then((data) => {
        let card = createCard(data);
        bigCard.innerHTML = card;
        let back = document.querySelector("#back")
back && back.addEventListener("click",function(){
  let confirmation = confirm("Bosh sahifaga qaytishni xoxlaysizmi ?")
  if (confirmation) {
  window.location.assign(`https://5-oy-9-dars-sooty.vercel.app/pages/detail.html?id=${elId}`);
  }})
  

  

const sound = document.getElementById("sound");
const triggers = document.querySelectorAll(".js-confetti");

const defaults = {
  disableForReducedMotion: true
};

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(200 * particleRatio)
    })
  );
}

function confettiExplosion(origin) {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    origin
  });
  fire(0.2, {
    spread: 60,
    origin
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    origin
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    origin
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    origin
  });
}

Array.from(triggers).forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const rect = trigger.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    const origin = {
      x: center.x / window.innerWidth,
      y: center.y / window.innerHeight
    };

    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
    confettiExplosion(origin);
  });
});
      })
   
    
      .catch((err) => {
        console.log(err);
      });
  } else {
    window.location.href("https://5-oy-9-dars-sooty.vercel.app");
  }
});

