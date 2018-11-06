'use strict';

function getNoteObjects() {
    return JSON.parse(localStorage.getItem('notes'));
}

function setSavedNotePosition(savedNote, savedPosition) {

    let xPosition = savedPosition[0];
    let yPosition = savedPosition[1];

    savedNote.style.transform = "translateX(" +
        xPosition + "px) translateY(" +
        yPosition + "px)";
}

function getNoteFromSavedObject(noteObject) {

    let savedNote = getNoteDiv();

    let savedNoteTopBar = getNoteTopBar(noteObject.title);
    savedNote.appendChild(savedNoteTopBar);
    let savedNoteContentArea = getNoteContentArea(noteObject.content);
    // savedNoteContentArea.style.resize = 'none';
    savedNote.appendChild(savedNoteContentArea);

    let savedPosition = [noteObject.xPosition, noteObject.yPosition];
    setSavedNotePosition(savedNote, savedPosition);

    setDragEvent(savedNote, savedPosition);

    return savedNote;
}

function createNotesFromSavedObjects(noteObjects) {

    for (let index = 0; index < noteObjects.length; index++) {

        let note = getNoteFromSavedObject(noteObjects[index]);
        document.body.appendChild(note);
    }
}

function loadNotes() {

    let noteObjects = getNoteObjects();
    createNotesFromSavedObjects(noteObjects);
}

loadNotes();