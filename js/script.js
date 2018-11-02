"use strict";

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'note');
    return noteDiv;
}

function getNewNote() {

    let newNote = getNoteDiv();
    // newNote.appendChild(appendTopBar());
    // newNote.appendChild(appendContentArea());
    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);