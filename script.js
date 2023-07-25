let coders = [
  { "image": "assets/eevee.png", "name": "Andrea" },
  { "image": "assets/meowth.png", "name": "Jaime" },
  { "image": "assets/psyduck.png", "name": "Sophia" },
  { "image": "assets/squirtle.png", "name": "Geovanny" },
  { "image": "assets/charmander.png", "name": "Bryan" },
  { "image": "assets/caterpie.png", "name": "Diego B" },
  { "image": "assets/jigglypuff.png", "name": "Ainhoa" },
  { "image": "assets/bullbasaur.png", "name": "Víctor" },
  { "image": "assets/abra.png", "name": "Jassed" },
  { "image": "assets/avatar4.png", "name": "Fernando" },
  { "image": "assets/avatar5.png", "name": "Emily" },
  { "image": "assets/bellsprout.png", "name": "Virginia" },
  { "image": "assets/dratini.png", "name": "Diego A" },
  { "image": "assets/mankey.png", "name": "Raúl" },
  { "image": "assets/mew.png", "name": "Gisela" },
  { "image": "assets/pidgey.png", "name": "Luis" },
  { "image": "assets/pikachu.png", "name": "Adriana" },
  { "image": "assets/weedle.png", "name": "Pedro" },
  { "image": "assets/zubat.png", "name": "Jimmy" },
  { "image": "assets/avatar 2.png", "name": "Thuanny" },
  { "image": "assets/avatar6.png", "name": "Cynthia" },
  { "image": "assets/avatar 3.png", "name": "Wanda" },
  { "image": "assets/avatar.png", "name": "Rubén" },
  { "image": "assets/venonat.png", "name": "Jorge" },
  { "image": "assets/snorlax.png", "name": "Jes" }
]

let Newcoders = [
  { "image": "assets/newcoders/avatar20.png"},
  { "image": "assets/newcoders/avatar21.png"},
  { "image": "assets/newcoders/avatar22.png"},
  { "image": "assets/newcoders/avatar23.png"},
  { "image": "assets/newcoders/avatar24.png"},
  { "image": "assets/newcoders/avatar25.png"},
  { "image": "assets/newcoders/avatar26.png"},
  { "image": "assets/newcoders/avatar27.png"},
  { "image": "assets/newcoders/avatar28.png"},
  { "image": "assets/newcoders/avatar29.png"},
  { "image": "assets/newcoders/avatar30.png"},
  { "image": "assets/newcoders/avatar31.png"},
  { "image": "assets/newcoders/avatar32.png"},
  { "image": "assets/newcoders/avatar33.png"},
  { "image": "assets/newcoders/avatar34.png"},
]
const button = document.getElementById('music');
const cancion = document.getElementById('cancion');
let isPlaying = false;

const toggleMusic = () => {
  isPlaying ? cancion.pause() : cancion.play();
  isPlaying = !isPlaying;
  button.classList.toggle('paused', !isPlaying);
  button.style.animation = isPlaying ? 'pulse-animation_0011 1.1s infinite ease-in-out' : 'none';
};

button.addEventListener('click', toggleMusic);


//BOTON DE CATCH
let buttonCatch = document.getElementById("buttons__bottom--first");
buttonCatch.addEventListener("click", () => {
if (coders.length > 0) {
  let randomIndex = Math.floor(Math.random() * coders.length);
  let random = coders[randomIndex];
  console.log(random);
  coders.splice(randomIndex, 1);
  console.log(coders);

  // Mostrar el ganador en una ventana modal
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

 // Crear y agregar el elemento de imagen

  const winnerImage = document.createElement("img");
  winnerImage.src = random.image;
  modalContent.appendChild(winnerImage);

  // Crear y agregar el elemento de nombre
  const winnerName = document.createElement("h2");
  winnerName.textContent = random.name;
  modalContent.appendChild(winnerName);

  modal.style.display = "block";

  // Cerrar la ventana modal después de 5 segundos
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.removeChild(winnerImage);
    modalContent.removeChild(winnerName);
  }, 5000);
} else {
  alert("Todos los coders han sido seleccionados");

  // Navegar a la sección con id "home" RESTANDOLE EL HEADER
  const section = document.getElementById("home");
  const headerHeight = document.querySelector("header").offsetHeight;
  const offset = headerHeight > 0 ? headerHeight : 0;
  window.location.hash = "#home";
  window.scrollBy({ top: section.getBoundingClientRect().top - offset, behavior: "smooth" });
}
});

let callToAction = document.getElementById('home__div-button');
let soundHome = new Audio ('audios/caught-a-pokemon.mp3');
callToAction.addEventListener('click', () => {
    soundHome.play();
});

let catchButton = document.getElementById("buttons__bottom--first");
let sound = new Audio ('audios/baracus-pokemon-cut-marito.mp3');
catchButton.addEventListener('click', () => {
    sound.play();
});

let addButton = document.getElementById("buttons__top--add");
addButton.addEventListener('click', () => {
    modal__container.style.display = "block";
});

function addCoder(){
let form = document.getElementById('form__content');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameForm = document.getElementById("name").value;
    let imageForm = document.getElementById("image").value;
    coders.push({ image: imageForm, name: nameForm });
    console.log(coders);
});
}
