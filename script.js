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

        const modal = document.getElementById("modal-id");
        const modalContent = document.getElementById("modal-content-id");

        // Create and add the image element

        const randomCoderImage = document.createElement("img");
        randomCoderImage.src = random.image;
        modalContent.appendChild(randomCoderImage);

        // Create and add the name element

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
        let newCoderValue = { image: selectedImage, name: name };
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

        newCoders = newCoders.filter((coder) => coder.image !== selectedImage);

        // Actualizar las imágenes disponibles en el modal

        availableImagesContainer.innerHTML = ""; // Limpiar las imágenes disponibles existentes

        newCoders.forEach((coder) => {
            // Crear un contenedor div para cada imagen para darle un tamaño más pequeño
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("available__image--container");

            // Crear el elemento de imagen con dimensiones más pequeñas
            let imageNewCoder = document.createElement("img");
            imageNewCoder.classList.add("available__images");
            imageNewCoder.src = coder.image;
            imageNewCoder.style.maxWidth = "90%";

            // Oyente de eventos para seleccionar una imagen
            imageNewCoder.addEventListener("click", () => {
                selectedImage = coder.image;
                let allImages = document.querySelectorAll(".available__images");
                allImages.forEach((image) => {
                    image.style.border = "none"; // Remove border from all images
                });
                imageNewCoder.style.border = "2px solid green"; // Add border to the selected image
            });

            // Append the smaller image to the container and add it to the modal
            imageContainer.appendChild(imageNewCoder);
            availableImagesContainer.appendChild(imageContainer);
        });
    } else {
        alert("Please enter a name and select an image before adding.");
    }
});
// Get references to elements with specific IDs in the HTML
const removeModal = document.getElementById('remove-modal-id');
const modalClose = document.getElementById('remove-modal-close-id');
const removeButton = document.getElementById('remove');
const modalButton = document.getElementById('remove-button');

// When the removeButton is clicked, show the removeModal
removeButton.addEventListener('click', () => removeModal.style.display = "block");

// When the modalClose button is clicked, hide the removeModal and clear the input field
modalClose.addEventListener('click', () => {
  removeModal.style.display = "none";
  document.getElementById('remove-name').value = ""; // Clear the input field when the modal is closed
});

// Function to remove a coder based on the input value
function removeCoder() {
  const modalInputValue = document.getElementById('remove-name').value.trim();

  // Remove from coders array
  let removedCoders = removeCoderByName(coders, modalInputValue);
  if (removedCoders.length < coders.length) {
    coders = removedCoders;
    console.log('Coders:', coders);
    // Update the UI to reflect the changes
    updateCodersUI();
  } else {
    console.log('The name entered does not match any coder in the coders list.');
  }

  // Remove from newCoders array
  let removedNewCoders = removeCoderByName(newCoders, modalInputValue);
  if (removedNewCoders.length < newCoders.length) {
    newCoders = removedNewCoders;
    console.log('NewCoders:', newCoders);
    // Update the UI to reflect the changes
    updateNewCodersUI();
  } else {
    console.log('The name entered does not match any coder in the newCoders list.');
  }

  // Hide the modal after removing the coder
  removeModal.style.display = "none";
  document.getElementById('remove-name').value = ""; // Clear the input field after removing the coder
}

// Add event listener to the modalButton (Remove button in the modal)
modalButton.addEventListener('click', removeCoder);

// Function to update the UI with the updated coders data
function updateCodersUI() {
  const codersContainer = document.querySelector(".coders");
  clearUIContainer(codersContainer);
  coders.forEach(coder => {
    codersContainer.appendChild(createCoderElement(coder));
  });
}

// Function to update the UI with the updated newCoders data
function updateNewCodersUI() {
  const newCodersContainer = document.querySelector(".new-coders");
  clearUIContainer(newCodersContainer);
  newCoders.forEach(coder => {
    newCodersContainer.appendChild(createCoderElement(coder));
  });
}

// Function to remove a coder from an array by name
function removeCoderByName(codersArray, nameToRemove) {
  return codersArray.filter(coder => coder.name.toLowerCase() !== nameToRemove.toLowerCase());
}

// Function to create a coder element with its image and name
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

// Function to clear the current UI content of a container
function clearUIContainer(container) {
  container.innerHTML = "";
}

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    location.reload();
});