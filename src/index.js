import dropdown from './dropdown.js';
import slide from './slider.js';
import './style.css';

const dropMenu = document.querySelector('#nav');
const slides = document.querySelector('#slides');

dropdown(dropMenu, "drop-down", "collapsed");

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', () => {
    slide(slides, 'prev');
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    slide(slides, 'next');
});