"use strikt"
const backdroping = document.querySelector(".backdrop");
const openModal = document.querySelector('[data-action="open-modal"]');
const closeModal = document.querySelector('[data-action="close-modal"]');
    openModal.addEventListener("click", ()=> {
        backdroping.style.display = "flex";
    });
    closeModal.addEventListener("click", ()=> {
        backdroping.style.display = "none";
    });
// наступне завдання
const colourRed = document.querySelector('[value="red"]');
const colourWhite = document.querySelector('[value="white"]');
const colourGreen = document.querySelector('[value="green"]');
colourRed.addEventListener("click", ()=> {
    document.body.style.background = "red";
 });


colourWhite.addEventListener("click", ()=> {
    document.body.style.background = "white";
 });


colourGreen.addEventListener("click", ()=> {
   document.body.style.background = "green";
});
// наступне завдання
const title = document.querySelector("h1")
const outPut = document.querySelector("#output");
const writeNameInput = document.querySelector("#write-name-input");
writeNameInput.addEventListener("input", () => {
if (writeNameInput.value.trim() !== "") {
    title.style.display = "flex";
    outPut.textContent = writeNameInput.value.trim();
}
else {
    title.style.display = "flex";
    outPut.textContent = "stranger";
}
});
// наступне завдання
const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
    console.log(validationInput.value.length);
    if (validationInput.getAttribute('data-length') > validationInput.value.length) { 
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
  });
// наступне завдання
const fsController = document.querySelector("#fs-Controller");
const inputText = document.querySelector("#text");
fsController.addEventListener( "input", () => {
    inputText.style.fontSize = `${fsController.value}px`;
  });