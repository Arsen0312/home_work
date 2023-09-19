const notesList = document.getElementById('notes-list');
const newNoteInput = document.getElementById('new-note');
const editNoteDiv = document.getElementById('edit-note');
const editedNoteInput = document.getElementById('edited-note');
let editIndex = null;

function addNote() {
    const noteText = newNoteInput.value.trim();
    if (noteText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = noteText;
        listItem.addEventListener('click', () => editNote(listItem));
        notesList.appendChild(listItem);
        newNoteInput.value = '';
    }
}

function editNote(noteItem) {
    editIndex = Array.from(notesList.children).indexOf(noteItem);
    editedNoteInput.value = noteItem.textContent;
    editNoteDiv.classList.remove('hidden');
}

function saveEditedNote() {
    if (editIndex !== null) {
        const editedText = editedNoteInput.value.trim();
        if (editedText !== '') {
            notesList.children[editIndex].textContent = editedText;
            editedNoteInput.value = '';
            editNoteDiv.classList.add('hidden');
            editIndex = null;
        }
    }
}