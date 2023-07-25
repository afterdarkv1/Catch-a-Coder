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

//Animations sound

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


        // Show the selected coder in a modal windows

        const modal = document.getElementById("modal");
        const modalContent = document.getElementById("modal-content");

        // Create and add the image element

        const winnerImage = document.createElement("img");
        winnerImage.src = random.image;
        modalContent.appendChild(winnerImage);

        // Create and add the name element

        const winnerName = document.createElement("h2");
        winnerName.textContent = random.name;
        modalContent.appendChild(winnerName);

        modal.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
            modalContent.removeChild(winnerImage);
            modalContent.removeChild(winnerName);
        }, 5000);
    } else {
        alert("Todos los coders han sido seleccionados");

        // Navigate to the section with id "home" RESTATING THE HEADER

        const section = document.getElementById("home");
        const headerHeight = document.querySelector("header").offsetHeight;
        const offset = headerHeight > 0 ? headerHeight : 0;
        window.location.hash = "#home";
        window.scrollBy({
            top: section.getBoundingClientRect().top - offset,
            behavior: "smooth",
        });
    }
});

//Add Button

let addButton = document.getElementById("buttons__top--add");
let addModal = document.getElementById("add__modal--id");
let addModalContent = document.getElementById("add__modal--content--id");
let nameInput = document.getElementById("add__name");
let enter = document.getElementById("add__button");
let selectedImage = "";
let availableImagesContainer = document.getElementById("available__images--container");

addButton.addEventListener("click", () => {
    addModal.style.display = "block";
});

let closeModal = () => {
    addModal.style.display = "none";
    nameInput.value = "";
};

let closeAddModal = document.getElementById("add__modal--close");
closeAddModal.addEventListener("click", closeModal);

// Oyente de eventos para imágenes disponibles para seleccionar
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
            image.style.border = "none"; // Remove border from all images
        });
        imageNewCoder.style.border = "2px solid green"; // Add border to the selected image
    });

    imageContainer.appendChild(imageNewCoder);
    availableImagesContainer.appendChild(imageContainer);
});

// Agregar evento al botón "Add"

enter.addEventListener("click", () => {
    let name = nameInput.value.trim();
    if (name !== "" && selectedImage !== "") {
        let newCoderValue = { "image": selectedImage, "name": name };
        coders.push(newCoderValue);
        console.log(coders);
        closeModal();
        
        // Crear elementos para mostrar el nuevo coder agregado

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

        // Eliminar la imagen seleccionada de newCoders

        newCoders = newCoders.filter(coder => coder.image !== selectedImage);

        // Actualizar las imágenes disponibles en el modal

        availableImagesContainer.innerHTML = ""; // Limpiar las imágenes disponibles existentes

        newCoders.forEach(coder => {
            // Crear un contenedor div para cada imagen para darle un tamaño más pequeño
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("available__image--container");

            // Crear el elemento de imagen con dimensiones más pequeñas
            let smallImage = document.createElement("img");
            smallImage.classList.add("available__images");
            smallImage.src = coder.image;
            smallImage.style.maxWidth = "90%";

            // Oyente de eventos para seleccionar una imagen
            smallImage.addEventListener("click", () => {
                selectedImage = coder.image;
                let allImages = document.querySelectorAll(".available__images");
                allImages.forEach(image => {
                    image.style.border = "none"; // Remove border from all images
                });
                smallImage.style.border = "2px solid green"; // Add border to the selected image
            });

            // Append the smaller image to the container and add it to the modal
            imageContainer.appendChild(smallImage);
            availableImagesContainer.appendChild(imageContainer);
        });
    } else {
        alert("Please enter a name and select an image before adding.");
    }
});
