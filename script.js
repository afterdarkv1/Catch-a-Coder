let coders = [
    { image: "assets/eevee.png", name: "Andrea" },
    { image: "assets/meowth.png", name: "Jaime" },
    { image: "assets/psyduck.png", name: "Sophia" },
    { image: "assets/squirtle.png", name: "Geovanny" },
    { image: "assets/charmander.png", name: "Bryan" },
    { image: "assets/caterpie.png", name: "Diego B." },
    { image: "assets/jigglypuff.png", name: "Ainhoa" },
    { image: "assets/bullbasaur.png", name: "Víctor" },
    { image: "assets/abra.png", name: "Jassed" },
    { image: "assets/avatar4.png", name: "Fernando" },
    { image: "assets/avatar5.png", name: "Emily" },
    { image: "assets/bellsprout.png", name: "Virginia" },
    { image: "assets/dratini.png", name: "Diego A." },
    { image: "assets/mankey.png", name: "Raúl" },
    { image: "assets/mew.png", name: "Gisela" },
    { image: "assets/pidgey.png", name: "Luis" },
    { image: "assets/pikachu.png", name: "Adriana" },
    { image: "assets/weedle.png", name: "Pedro" },
    { image: "assets/zubat.png", name: "Jimmy" },
    { image: "assets/avatar 2.png", name: "Thuanny" },
    { image: "assets/avatar6.png", name: "Cynthia" },
    { image: "assets/avatar 3.png", name: "Wanda" },
    { image: "assets/avatar.png", name: "Rubén" },
    { image: "assets/venonat.png", name: "Jorge" },
    { image: "assets/snorlax.png", name: "Jes" },
];

console.log(coders);

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

function randomCoders() {
    let randomIndex = Math.floor(Math.random() * coders.length);
    console.log(randomIndex);
    let random = coders[randomIndex];
    console.log(random);
    coders.splice(randomIndex, 1);
    console.log(coders);
}

let eventButton = () => randomCoders();
catchButton.addEventListener("click", eventButton);


