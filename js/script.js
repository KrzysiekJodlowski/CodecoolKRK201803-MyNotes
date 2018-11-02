"use strict";

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'note');

    noteDiv.style.display = 'block';
    noteDiv.style.width = '300px';
    noteDiv.style.height = '400px';
    noteDiv.style.backgroundColor = '#FFF';

    return noteDiv;
}

function getNewNote() {

    let newNote = getNoteDiv();
    newNote.appendChild(appendTopBar());
    newNote.appendChild(appendContentArea());

    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);