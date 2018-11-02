"use strict";

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function getNoteTopBar() {
    let noteTopBar = document.createElement('span');
    noteTopBar.setAttribute('class', 'noteTopBar');

    let noteTopBarTitle = document.createElement('input');
    noteTopBarTitle.setAttribute('type', 'text');
    noteTopBarTitle.setAttribute('placeholder', 'title');

    let noteTopBarDeleteButton = document.createElement('button');
    noteTopBarDeleteButton.setAttribute('class', 'delete');
    noteTopBarDeleteButton.addEventListener('click', function () {
        var targetElement = event.target || event.srcElement;
        targetElement = targetElement.parentNode;
        targetElement = targetElement.parentNode;
        document.body.removeChild(targetElement);
    }, false);

    noteTopBar.appendChild(noteTopBarTitle);
    noteTopBar.appendChild(noteTopBarDeleteButton);
    return noteTopBar;
}

function getNoteContentArea() {
    let noteContentArea = document.createElement('textarea');
    noteContentArea.setAttribute('class', 'content');
    noteContentArea.setAttribute('rows', '22');
    noteContentArea.setAttribute('cols', '40');
    noteContentArea.setAttribute('placeholder', 'content');
    return noteContentArea;
}

function getNewNote() {
    let newNote = getNoteDiv();
    newNote.appendChild(getNoteTopBar());
    newNote.appendChild(getNoteContentArea());
    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);