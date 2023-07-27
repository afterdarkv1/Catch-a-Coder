let coders = [
    { image: "assets/coders/eevee.png", name: "Andrea" },
    { image: "assets/coders/meowth.png", name: "Jaime" },
    { image: "assets/coders/psyduck.png", name: "Sophia" },
    { image: "assets/coders/squirtle.png", name: "Geovanny" },
    { image: "assets/coders/charmander.png", name: "Bryan" },
    { image: "assets/coders/caterpie.png", name: "Diego B" },
    { image: "assets/coders/jigglypuff.png", name: "Ainhoa" },
    { image: "assets/coders/bullbasaur.png", name: "Víctor" },
    { image: "assets/coders/abra.png", name: "Jassed" },
    { image: "assets/coders/avatar4.png", name: "Fernando" },
    { image: "assets/coders/avatar5.png", name: "Emily" },
    { image: "assets/coders/bellsprout.png", name: "Virginia" },
    { image: "assets/coders/dratini.png", name: "Diego A" },
    { image: "assets/coders/mankey.png", name: "Raúl" },
    { image: "assets/coders/mew.png", name: "Gisela" },
    { image: "assets/coders/pidgey.png", name: "Luis" },
    { image: "assets/coders/pikachu.png", name: "Adriana" },
    { image: "assets/coders/weedle.png", name: "Pedro" },
    { image: "assets/coders/zubat.png", name: "Jimmy" },
    { image: "assets/coders/avatar 2.png", name: "Thuanny" },
    { image: "assets/coders/avatar6.png", name: "Cynthia" },
    { image: "assets/coders/avatar 3.png", name: "Wanda" },
    { image: "assets/coders/avatar.png", name: "Rubén" },
    { image: "assets/coders/venonat.png", name: "Jorge" },
    { image: "assets/coders/snorlax.png", name: "Jes" },
];

let newCoders = [
    { image: "assets/newcoders/avatar20.png", name: "" },
    { image: "assets/newcoders/avatar21.png", name: "" },
    { image: "assets/newcoders/avatar22.png", name: "" },
    { image: "assets/newcoders/avatar23.png", name: "" },
    { image: "assets/newcoders/avatar24.png", name: "" },
    { image: "assets/newcoders/avatar25.png", name: "" },
    { image: "assets/newcoders/avatar26.png", name: "" },
    { image: "assets/newcoders/avatar27.png", name: "" },
    { image: "assets/newcoders/avatar28.png", name: "" },
    { image: "assets/newcoders/avatar29.png", name: "" },
    { image: "assets/newcoders/avatar30.png", name: "" },
    { image: "assets/newcoders/avatar31.png", name: "" },
    { image: "assets/newcoders/avatar32.png", name: "" },
    { image: "assets/newcoders/avatar33.png", name: "" },
    { image: "assets/newcoders/avatar34.png", name: "" },
];

//SOUND ANIMATIONS

const button = document.getElementById("music");
const cancion = document.getElementById("cancion");
let isPlaying = false;

const toggleMusic = () => {
    isPlaying ? cancion.pause() : cancion.play();
    isPlaying = !isPlaying;
    button.classList.toggle("paused", !isPlaying);
    button.style.animation = isPlaying
        ? "pulse-animation_0011 1.1s infinite ease-in-out"
        : "none";
};

button.addEventListener("click", toggleMusic);

let callToAction = document.getElementById("home__div-button");
let soundHome = new Audio("audios/caught-a-pokemon.mp3");
callToAction.addEventListener("click", () => {
    soundHome.play();
});

let catchButton = document.getElementById("buttons__bottom--first");
let sound = new Audio("audios/pokemon-3.mp3");
catchButton.addEventListener("click", () => {
    sound.play();
});

//CATCH BUTTON

let buttonCatch = document.getElementById("buttons__bottom--first");
buttonCatch.addEventListener("click", () => {
    if (coders.length > 0) {
        let randomIndex = Math.floor(Math.random() * coders.length);
        let random = coders[randomIndex];
        console.log(random);
        coders.splice(randomIndex, 1);
        console.log(coders);

        const modal = document.getElementById("modal-id");
        const modalContent = document.getElementById("modal-content-id");

        const randomCoderImage = document.createElement("img");
        randomCoderImage.src = random.image;
        modalContent.appendChild(randomCoderImage);

        const randomCoderName = document.createElement("h2");
        randomCoderName.textContent = random.name;
        modalContent.appendChild(randomCoderName);

        modal.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
            modalContent.removeChild(randomCoderImage);
            modalContent.removeChild(randomCoderName);
        }, 5000);
    } else {
        const modal = document.getElementById("modal-id");
        const modalContent = document.getElementById("modal-content-id");

        const allCodersSelected = document.createElement("img");
        allCodersSelected.src = '/assets/others/pikachu-catch-button.jpg';
        modalContent.appendChild(allCodersSelected);

        const allCodersSelectedText = document.createElement("h2");
        allCodersSelectedText.textContent =
            "All coders have been selected...";
        modalContent.appendChild(allCodersSelectedText);

        modal.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
            modalContent.removeChild(allCodersSelected);
            modalContent.removeChild(allCodersSelectedText);
        }, 8000);

        window.history.back();
    }
});

//ADD BUTTON

let addButton = document.getElementById("buttons__top--add");
let addModal = document.getElementById("add__modal--id");
let addModalContent = document.getElementById("add__modal--content--id");
let nameInput = document.getElementById("add__name");
let enter = document.getElementById("add__button");
let selectedImage = "";
let availableImagesContainer = document.getElementById(
    "available__images--container"
);

addButton.addEventListener("click", () => {
    addModal.style.display = "block";
});

let closeModal = () => {
    addModal.style.display = "none";
    nameInput.value = "";
};

let closeAddModal = document.getElementById("add__modal--close");
closeAddModal.addEventListener("click", closeModal);

newCoders.forEach((coder) => {
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("available__image--container");

    let imageNewCoder = document.createElement("img");
    imageNewCoder.classList.add("available__images");
    imageNewCoder.src = coder.image;
    imageNewCoder.style.maxWidth = "90%";

    imageNewCoder.addEventListener("click", () => {
        selectedImage = coder.image;
        let allImages = document.querySelectorAll(".available__images");
        allImages.forEach((image) => {
            image.style.border = "none";
        });
        imageNewCoder.style.border = "2px solid green";
    });

    imageContainer.appendChild(imageNewCoder);
    availableImagesContainer.appendChild(imageContainer);
});

enter.addEventListener("click", () => {
    let name = nameInput.value.trim();
    if (name !== "" && selectedImage !== "") {
        let newCoderValue = { image: selectedImage, name: name };
        coders.push(newCoderValue);
        console.log(coders);
        closeModal();

        let newCoderDiv = document.createElement("div");
        newCoderDiv.classList.add("coders__person");

        let newCoderImage = document.createElement("img");
        newCoderImage.classList.add("coders__img");
        newCoderImage.src = newCoderValue.image;

        let newCoderName = document.createElement("p");
        newCoderName.classList.add("coders__name");
        newCoderName.textContent = newCoderValue.name;

        newCoderDiv.appendChild(newCoderImage);
        newCoderDiv.appendChild(newCoderName);

        let codersContainer = document.getElementById("coders__id");
        codersContainer.appendChild(newCoderDiv);

        newCoders = newCoders.filter((coder) => coder.image !== selectedImage);

        availableImagesContainer.innerHTML = "";

        newCoders.forEach((coder) => {
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("available__image--container");

            let imageNewCoder = document.createElement("img");
            imageNewCoder.classList.add("available__images");
            imageNewCoder.src = coder.image;
            imageNewCoder.style.maxWidth = "90%";

            imageNewCoder.addEventListener("click", () => {
                selectedImage = coder.image;
                let allImages = document.querySelectorAll(".available__images");
                allImages.forEach((image) => {
                    image.style.border = "none";
                });
                imageNewCoder.style.border = "2px solid green";
            });
            imageContainer.appendChild(imageNewCoder);
            availableImagesContainer.appendChild(imageContainer);
        });
    } else {
        alert("Please enter a name and select an image before adding.");
    }
});

///REMOVE BUTTON

const removeModal = document.getElementById("remove-modal-id");
const modalClose = document.getElementById("remove-modal-close-id");
const removeButton = document.getElementById("remove");
const modalButton = document.getElementById("remove-button");

removeButton.addEventListener(
    "click",
    () => (removeModal.style.display = "block")
);

modalClose.addEventListener("click", () => {
    removeModal.style.display = "none";
    document.getElementById("remove-name").value = "";
});

function removeCoder() {
    const modalInputValue = document.getElementById("remove-name").value.trim();
    let removedCoders = removeCoderByName(coders, modalInputValue);
    if (removedCoders.length < coders.length) {
        coders = removedCoders;
        console.log("Coders:", coders);
        updateCodersUI();
    }
    let removedNewCoders = removeCoderByName(newCoders, modalInputValue);
    if (removedNewCoders.length < newCoders.length) {
        newCoders = removedNewCoders;
        console.log('NewCoders:', newCoders);
        // Update the UI to reflect the changes
        updateNewCodersUI();
    }
    removeModal.style.display = "none";
    document.getElementById("remove-name").value = "";
}

modalButton.addEventListener("click", removeCoder);

function updateCodersUI() {
    const codersContainer = document.querySelector(".coders");
    clearUIContainer(codersContainer);
    coders.forEach((coder) => {
        codersContainer.appendChild(createCoderElement(coder));
    });
}

function updateNewCodersUI() {
    const newCodersContainer = document.querySelector(".new-coders");
    clearUIContainer(newCodersContainer);
    newCoders.forEach((coder) => {
        newCodersContainer.appendChild(createCoderElement(coder));
    });
}

function removeCoderByName(codersArray, nameToRemove) {
    return codersArray.filter(
        (coder) => coder.name.toLowerCase() !== nameToRemove.toLowerCase()
    );
}

function createCoderElement(coder) {
    let newCoderDiv = document.createElement("div");
    newCoderDiv.classList.add("coders__person");

    let newCoderImage = document.createElement("img");
    newCoderImage.classList.add("coders__img");
    newCoderImage.src = coder.image;

    let newCoderName = document.createElement("p");
    newCoderName.classList.add("coders__name");
    newCoderName.textContent = coder.name;

    newCoderDiv.appendChild(newCoderImage);
    newCoderDiv.appendChild(newCoderName);

    return newCoderDiv;
}

function clearUIContainer(container) {
    container.innerHTML = "";
}

modalButton.addEventListener('click', () => {
    const modal = document.getElementById("modal-id");
    const modalContent = document.getElementById("modal-content-id");

    const removedCoderAlertImage = document.createElement("img");
    removedCoderAlertImage.src = '/assets/others/pikachu-remove-button.jpg';
    modalContent.appendChild(removedCoderAlertImage);

    const removedCoderAlertText = document.createElement("h2");
    removedCoderAlertText.textContent = 'The coder has been removed...';
    modalContent.appendChild(removedCoderAlertText);

    modal.style.display = "block";

    setTimeout(() => {
        modal.style.display = "none";
        modalContent.removeChild(removedCoderAlertImage);
        modalContent.removeChild(removedCoderAlertText);
    }, 5000);
});

//RESET BUTTON

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    location.reload();
});

window.sr = ScrollReveal();

sr.reveal('.home__div-text', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.pokeball', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.home__div-button', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.coders', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

    sr.reveal('.pokeball', {
      distance: '50px',
      duration: 1000,
      rotate: {
        x: 0,
        y: 180,
        z: 0
      },
      opacity: 0,
      scale: 0.8,
      easing: 'ease-in-out',
      beforeReveal: (el) => {
        el.style.opacity = 1;
        el.style.transform = 'scale(1)';
      },
      afterReveal: (el) => {
        el.style.transform = 'scale(1.1)';
        el.style.transition = 'transform 0.3s';
        setTimeout(() => {
          el.style.transform = 'scale(1)';
        }, 300);      
    },
      reset: true
    });
  

    
  


//BOTOM PARA CAMBIAR COLORES
let modoBlanco = document.querySelector('.modo_blanco');
let modoVerde = document.querySelector('.modo_verde');
let modoAzul = document.querySelector('.modo_azul');
let modoGris = document.querySelector('.modo_gris');
let modoAmarillo = document.querySelector('.modo_amarillo');
let letras = document.querySelector('.home__div-text')


let body = document.querySelector('body');


//BLANCO
function blanco (){
  modoBlanco.style.cssText= 'display: none';
  modoVerde.style.cssText= 'display: inline';
  modoGris.style.cssText= 'display: none';
  modoAmarillo.style.cssText= 'display: none';
  modoAzul.style.cssText ='display: none';
  body.style.cssText= 'background-color: white';
  letras.style.cssText = 'color: #93C3D9'
};

modoBlanco.addEventListener('click', blanco);

//VERDE
function verde (){
  modoVerde.style.cssText ='display:none';
  modoBlanco.style.cssText = 'display: none';
  modoGris.style.cssText= 'display: none';
  modoAmarillo.style.cssText= 'display: none';
  modoAzul.style.cssText ='display: inline';
  body.style.cssText = 'background-color: #8ECEAC';
  letras.style.cssText = 'color: white'
};

modoVerde.addEventListener('click', verde)

//AZUL
function azul (){
  modoVerde.style.cssText= 'display: none';
  modoAzul.style.cssText ='display: none';
  modoBlanco.style.cssText= 'display: none';
  modoAmarillo.style.cssText= 'display: none';
  modoGris.style.cssText= 'display: inline';
  body.style.cssText= 'background-color: #93C3D9';
  letras.style.cssText = 'color: white'
};

modoAzul.addEventListener('click', azul);

//GRIS
function gris (){
  modoVerde.style.cssText= 'display: none';
  modoAzul.style.cssText ='display: none';
  modoBlanco.style.cssText= 'display: none';
  modoGris.style.cssText= 'display: none';
  modoAmarillo.style.cssText= 'display: inline';
  body.style.cssText= 'background-color: rgb(235, 235, 235)';
  letras.style.cssText = 'color: #93C3D9'
};

modoGris.addEventListener('click', gris);

//AMARILLO
function amarillo (){
  modoAzul.style.cssText ='display: none';
  modoBlanco.style.cssText= 'display: inline';
  modoGris.style.cssText= 'display: none';
  modoVerde.style.cssText= 'display: none';
  modoAmarillo.style.cssText= 'display: none';
  body.style.cssText= 'background-color: #F9EE8B';
  letras.style.cssText = 'color: #93C3D9'
};

modoAmarillo.addEventListener('click', amarillo);

