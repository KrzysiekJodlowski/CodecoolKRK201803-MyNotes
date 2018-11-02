"use strict";

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function getNoteTopBar() {
    let noteTopBar = document.createElement('span');
    noteTopBar.setAttribute('class', 'noteTopBar');

    let notetopBarTitle = document.createElement('input');
    notetopBarTitle.setAttribute('type', 'text');
    notetopBarTitle.setAttribute('placeholder', 'title');

    noteTopBar.appendChild(notetopBarTitle);
    return noteTopBar;
}

function getNewNote() {
    let newNote = getNoteDiv();
    newNote.appendChild(getNoteTopBar());
    // newNote.appendChild(getNoteContentArea());
    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);