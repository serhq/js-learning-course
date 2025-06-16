'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);


const openModal = function () {
    modal.classList.remove('hidden'); // classList - change the class (add/remove)
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) { // get the information about the key that was pressed where -> (e) means the parameter of the pressed key
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
}); // press the key 

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
