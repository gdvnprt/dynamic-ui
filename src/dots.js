export default function changeDots() {
    const slides = document.querySelector('#slides');
    const slideDots = document.querySelectorAll('.slide-dot');
    let slidePos = parseInt(slides.style.right);
    //if pos is NAN, first dot is larger
    if (isNaN(slidePos)) {
        for(let i = 0; i < slideDots.length; i++) {
            slideDots[i].classList.add('sm-dot');
            slideDots[i].classList.remove('large-dot');
        };
        slideDots[0].classList.add('large-dot');
        slideDots[0].classList.remove('sm-dot');
    } else {
        //if pos = the corresponding number, that slide toggles larger and previoius slide toggles smaller
        for(let i = 0; i < slideDots.length; i++) {
            if (slidePos == 75 * i) {
                for(let a = 0; a < slideDots.length; a++) {
                    slideDots[a].classList.add('sm-dot');
                    slideDots[a].classList.remove('large-dot');
                };
                slideDots[i].classList.add('large-dot');
                slideDots[i].classList.remove('sm-dot');
            };
        };
    };
};