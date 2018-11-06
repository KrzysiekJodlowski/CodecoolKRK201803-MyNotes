'use strict';

function getNoteDiv() {

    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function setRandomNotePosition(newNote) {

    let randomPositionX = Math.random() * 800;
    let randomPositionY = Math.random() * 300;

    newNote.style.transform = "translateX(" +
        randomPositionX + "px) translateY(" +
        randomPositionY + "px)";

    let notePosition = [randomPositionX, randomPositionY];
    return notePosition;
}

function setTopBarTitle(noteTopBarTitle, title) {

    if (title != "") {
        noteTopBarTitle.value = title;
    } else {
        noteTopBarTitle.setAttribute('placeholder', 'title');
    }
}

function setDeleteButtonEvent(noteTopBarDeleteButton) {

    noteTopBarDeleteButton.addEventListener('click', function (event) {
        let targetElement = event.target;
        targetElement = targetElement.parentNode;
        targetElement = targetElement.parentNode;
        document.body.removeChild(targetElement);
    }, false);
}

function setInputEvent(inputElement) {      // TODO

    inputElement.addEventListener('onKeyup', function () {
        saveNotes();
    }, false);
}

function getTopBarDeleteButton() {

    let noteTopBarDeleteButton = document.createElement('button');
    noteTopBarDeleteButton.setAttribute('class', 'deleteNoteButton');
    setDeleteButtonEvent(noteTopBarDeleteButton);

    return noteTopBarDeleteButton;
}

function getNoteTopBar(title = "") {

    let noteTopBar = document.createElement('span');
    noteTopBar.setAttribute('class', 'noteTopBar');

    let noteTopBarTitle = document.createElement('input');
    noteTopBarTitle.setAttribute('type', 'text');
    setTopBarTitle(noteTopBarTitle, title);

    let noteTopBarDeleteButton = getTopBarDeleteButton()

    noteTopBar.appendChild(noteTopBarTitle);
    noteTopBar.appendChild(noteTopBarDeleteButton);

    return noteTopBar;
}

function setContent(noteContentArea, content) {

    if (content != "") {
        noteContentArea.value = content;
    } else {
        noteContentArea.setAttribute('placeholder', 'content');
    }
}

function getNoteContentArea(content = "") {

    let noteContentArea = document.createElement('textarea');
    noteContentArea.setAttribute('class', 'noteContent');
    setContent(noteContentArea, content);

    return noteContentArea;
}

function getNewNote() {

    let newNote = getNoteDiv();
    newNote.appendChild(getNoteTopBar());
    newNote.appendChild(getNoteContentArea());

    let notePosition = setRandomNotePosition(newNote);
    setDragEvent(newNote, notePosition);

    return newNote;
}

function setAddNoteEvent() {

    document.getElementById('addNoteButton').addEventListener('click', function () {

        let newNote = getNewNote();
        document.body.appendChild(newNote);

    }, false);
}

setAddNoteEvent();