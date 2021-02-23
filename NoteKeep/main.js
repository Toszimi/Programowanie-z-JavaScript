/* eslint-disable no-inner-declarations */
const lsKey = 'notes';
let notes = [];
window.color = '';


const notesContainer = document.querySelector('main');
document.querySelector('#dodajNotatke').addEventListener('click', onNewNote);
function colorSet(event) {
    const target = event.currentTarget;
    let styles = window.getComputedStyle(target);
    window.color = styles.getPropertyValue('background-color');
    console.log(target, window.color);
}
function onNewNote() {
    const title = document.querySelector('#note1').value;
    const content = document.querySelector('#note2').value;
    const color = window.color;
    window.clickTime = notes.length;
    const note = {
        id: window.clickTime,
        title: title,
        content: content,
        color: color,
        pinned: false,
        createDate: new Date(),
    };

    notes.push(note);
    localStorage.setItem(lsKey, JSON.stringify(notes));
    window.location.reload();
}



const colorsButton = document.querySelectorAll('.chooseColor button');
for (let index = 0; index < colorsButton.length; index++) {
    colorsButton[index].addEventListener('click', colorSet);
}

const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey));

notes = notesFromLocalStorage.map((note) => {
    note.createDate = new Date(note.createDate);
    return note;
});


for (const note of notes) {
    const htmlNote = document.createElement('section');
    const htmlTitle = document.createElement('h1');
    const htmlContent = document.createElement('p');
    const htmlDate = document.createElement('h4');
    const htmlRemoveBtn = document.createElement('button');
    const htmlId = document.createElement('h5');
    htmlId.innerHTML = note.id;
    htmlTitle.innerHTML = note.title;
    htmlContent.innerHTML = note.content;
    htmlDate.innerHTML = note.createDate.toLocaleString();
    htmlRemoveBtn.innerHTML = 'usuń';

    htmlRemoveBtn.addEventListener('click', (ev) => {
        const target = ev.currentTarget;
        const parent = target.parentElement;
        const parentParent = parent.parentElement;
        const main = document.querySelector('main');
        let index = Array.prototype.indexOf.call(parentParent.children, parent);
        removeLocalStorage(index);
        main.removeChild(parent);
        window.location.reload();

    });
    function removeLocalStorage(index) {
        notesFromLocalStorage.splice(index, 1);
        localStorage.setItem(lsKey, JSON.stringify(notesFromLocalStorage));
    }
    htmlNote.classList.add('note');
    htmlNote.appendChild(htmlId);
    htmlNote.appendChild(htmlTitle);
    htmlNote.appendChild(htmlContent);
    htmlNote.appendChild(htmlDate);
    htmlNote.appendChild(htmlRemoveBtn);
    notesContainer.appendChild(htmlNote);
}
const setColor = document.querySelectorAll('.note');
for (let index = 0; index < notesFromLocalStorage.length; index++) {

    setColor[index].style.background = notesFromLocalStorage[index].color;
    console.log(notesFromLocalStorage[index].color);
}