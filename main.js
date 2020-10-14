const lightbox = document.querySelector('.lightbox');
const Zdjecia = document.querySelectorAll('.galeria img');
for (let idx = 0; idx < Zdjecia.length; idx++) {
    const img = Zdjecia[idx];
    img.addEventListener('click', PokazLightbox);
}


function PokazLightbox(ev) {
    const lightbox = document.querySelector('.lightbox');
    const Zdj = document.querySelector('.lightbox img');
    const ZdjUrl = ev.target.src;
    Zdj.src = ZdjUrl;
    console.log('showlight');
    lightbox.classList.add('widoczne');

}

lightbox.addEventListener('click', ukryjLightbox);

function ukryjLightbox(){
    lightbox.classList.remove('widoczne');
}
