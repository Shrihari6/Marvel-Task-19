
function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    if (noteText === '') return;
    const noteObj = { text: noteText, id: Date.now() };
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.unshift(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('noteText').value = '';
    showNotes();
}

function showNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = notes.map(note => `
        <div class="note">
            <span>${note.text}</span>
            <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
        </div>
    `).join('');
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

window.onload = showNotes;
