"use strikt"

const openModalBtn = document.querySelector('[data-action="open-modal]');
const closeModalBtn = document.querySelector('[data-action="close-modal]');
const backdrop = document.querySelector('backdrop');

openModalBtn.addEventListener('click', () => {
 openModalBtn.classList.toggle(show_modal);
} );



const color = document.querySelector('.color');

color.addEventListener('color', () => {
    document.body.style.backgroundColor = 'color';
  });
