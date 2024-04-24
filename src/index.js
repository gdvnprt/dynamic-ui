import dropdown from './dropdown.js';
import slide from './slider.js';
import changeDots from './dots.js';

const dropMenu = document.querySelector('#nav');
const slides = document.querySelector('#slides');


changeDots();

dropdown(dropMenu, "drop-down", "collapsed");

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', () => {
    slide(slides, 'prev');
    changeDots();
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    slide(slides, 'next');
    changeDots();
});

