const lsKey = 'notes';
// 1. zapisywanie notatki i tablicy notatek w localStorage
function saveNoteInLocalStorage (note) {
    notes.push(note);
    localStorage.setItem(lsKey, JSON.stringify(notes));
}
// notatka: title, content, colour, pinned, createDate
const notes = [];

const note = {
    title: '',
    content: '',
    colour: '',
    pinned: false,
    createDate: new Date()
};
notes.push(note); //moze wywalac blad
localStorage.setItem(lsKey, JSON.stringify(notes));
// 2. wczytywanie z localStorage
const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey));
console.log(notesFromLocalStorage);

const mappedNotes = notesFromLocalStorage.map(note => {
    note.createDate = new Date(note.createDate);
    return note;
});

// 3. modyfkowanie struktury htmla
const notesContainer = document.querySelector('main');
const addNoteButton = document.querySelector('#dodajNotatke');
addNoteButton.addEventListener('click', ()=>{
    for(const note of mappedNotes){
        const htmlNote = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
        const htmlRemoveBtn = document.createElement('button');
        // const htmlRed = document.createElement('red');
        // const htmlPurple = document.createElement('purple');
        // const htmlPink = document.createElement('pink');
        // const htmlBlue = document.createElement('blue');
        // const htmlCyan = document.createElement('cyan');
        // const htmlGreen = document.createElement('green');

        // htmlRed.addEventListener('click', colorChoose);
        // htmlPurple.addEventListener('click', colorChoose);
        // htmlPink.addEventListener('click', colorChoose);
        // htmlBlue.addEventListener('click', colorChoose);
        // htmlCyan.addEventListener('click', colorChoose);
        // htmlGreen.addEventListener('click', colorChoose);
     

        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();
        htmlRemoveBtn.innerHTML = 'usuń';

        htmlRemoveBtn.addEventListener('click', () =>{
            notesContainer.removeChild(htmlNote);
        });

        htmlNote.classList.add('note');
        htmlNote.appendChild(htmlTitle);
        htmlNote.appendChild(htmlContent);
        htmlNote.appendChild(htmlDate);
        htmlNote.appendChild(htmlRemoveBtn);

        notesContainer.appendChild(htmlNote);
    }
});
// pobieranie danych z inputów
document.querySelector('#dodajNotatke').addEventListener('click', onNewNote);

function onNewNote(){
    const title = document.querySelector('#note1').value;
    const content = document.querySelector('#note2').value;
    console.log(title, content);
    saveNoteInLocalStorage();
}