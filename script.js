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
        allCodersSelected.src = "assets/pikachu-pokemon.jpg";
        modalContent.appendChild(allCodersSelected);

        const allCodersSelectedText = document.createElement("h2");
        allCodersSelectedText.textContent =
            "Todos los coders fueron seleccionados";
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
    } else {
        console.log(
            "The name entered does not match any coder in the coders list."
        );
    }
    let removedNewCoders = removeCoderByName(newCoders, modalInputValue);
    if (removedNewCoders.length < newCoders.length) {
        newCoders = removedNewCoders;
        console.log("NewCoders:", newCoders);
        updateNewCodersUI();
    } else {
        console.log(
            "The name entered does not match any coder in the newCoders list."
        );
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

//RESET BUTTON

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    location.reload();
});
