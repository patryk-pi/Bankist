'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTO = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");


const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

btnScrollTO.addEventListener('click', e => {
    // LEGACY CODE
    /*  const s1coords = section1.getBoundingClientRect();

      window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset, // Top relative to the viewport
        behavior: 'smooth',
      })*/

    section1.scrollIntoView({behavior: 'smooth'})
})

// PAGE NAVIGATION

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', e => {
//     e.preventDefault();
//
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
});

// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e=> {
    const clicked = e.target.closest('.operations__tab'); // Zwarca najblizszy operations__tab od klikniecia

    if (!clicked) return; // Jesli nie ma opeations__tab na clicku to przerwij
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})