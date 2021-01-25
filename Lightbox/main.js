const lightbox = document.querySelector('.lightbox');
const Zdjecia = document.querySelectorAll('.galeria img');
const poprzedni = document.querySelector('#poprzedniBtn');
const nastepny = document.querySelector('#nastepnyBtn');
const zamknij = document.querySelector('#zamknij');

let poprzedniElement;
let nastepnyElement;

for (let index = 0; index < Zdjecia.length; index++) {
    const img = Zdjecia[index];
    img.addEventListener('click', PokazLightbox);
}

function PokazLightbox(ev) {
    const lightbox = document.querySelector('.lightbox');
    const Zdj = document.querySelector('.lightbox img');
    const ZdjUrl = ev.target.src;
    Zdj.src = ZdjUrl;
    lightbox.classList.add('widoczne');
    poprzedniElement = ev.target.previousElementSibling;
    nastepnyElement = ev.target.nextElementSibling;
}

zamknij.addEventListener('click', ukryjLightbox);

function ukryjLightbox(){
    lightbox.classList.remove('widoczne');
}
nastepny.addEventListener('click', function () {
    ukryjLightbox();
    nastepnyElement ? nastepnyElement.click() : Zdjecia[0].click();
});

poprzedni.addEventListener('click', function () {
    ukryjLightbox();
    poprzedniElement ? poprzedniElement.click() : Zdjecia[Zdjecia.length - 1].click();
});
