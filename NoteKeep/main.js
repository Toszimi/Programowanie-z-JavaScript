const lsKey = 'notes';
// 1. zapisywanie notatki i tablicy notatek w localStorage
function saveNoteInLocalStorage (note) {
    notes.push(note);
    localStorage.setItem(lsKey, JSON.stringify(notes));
    mappedNotes = notes;
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

let mappedNotes = notesFromLocalStorage;

// 3. modyfkowanie struktury htmla
const notesContainer = document.querySelector('main');
//const addNoteButton = document.querySelector('#dodajNotatke');
document.querySelector('#dodajNotatke').addEventListener('click', onNewNote);


function onNewNote(){
    const title = document.querySelector('#note1').value;
    const content = document.querySelector('#note2').value;
   
    saveNoteInLocalStorage(({
        note,
    }));
    
    for(const note of mappedNotes){
        const htmlNote = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
        const htmlRemoveBtn = document.createElement('button');
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
}