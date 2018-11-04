'use strict';

function getNoteObject(currentNote) {

    let notePosition = currentNote.getBoundingClientRect();
    let currentNoteObject = {
        title: currentNote.childNodes[0].childNodes[0].value,
        content: currentNote.childNodes[1].value,
        width: Math.round(currentNote.offsetWidth),
        height: Math.round(currentNote.offsetHeight),
        xPosition: Math.round(notePosition.left),
        yPosition: Math.round(notePosition.top)
    };
    return currentNoteObject;
}

function getNoteObjects() {

    let currentNotes = document.getElementsByClassName('noteDiv');
    let noteObjects = [];

    for (let index = 0; index < currentNotes.length; index++) {
        let currentNoteObject = getNoteObject(currentNotes[index]);
        noteObjects[index] = currentNoteObject;
    }
    return noteObjects;
}

function saveNotes() {

    let noteObjects = getNoteObjects();
    localStorage.setItem('notes', JSON.stringify(noteObjects));
}