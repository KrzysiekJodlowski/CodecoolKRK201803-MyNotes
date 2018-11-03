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
    let randomPositions = [randomPositionX, randomPositionY];
    return randomPositions;
}

function setDragEvent(newNote, randomPositions) {
    let draggedElement;
    let grabPointY;
    let grabPointX;
    let randomPositionX = randomPositions[0];
    let offsetX = randomPositionX;
    let randomPositionY = randomPositions[1];
    let offsetY = randomPositionY;

    function onDragStart(event) {
        if (event.target.className.indexOf('noteTopBar') === -1) {
            return;
        }

        draggedElement = this;
        grabPointY = event.clientY - offsetY;
        grabPointX = event.clientX - offsetX;
    };

    function onDrag(event) {
        if (!draggedElement) {
            return;
        }

        let positionX = event.clientX - grabPointX;
        let positionY = event.clientY - grabPointY;
        offsetX = positionX;
        offsetY = positionY;

        if (positionX < 0) {
            positionX = 0;
        }
        if (positionY < 0) {
            positionY = 0;
        }

        draggedElement.style.transform = "translateX(" +
            positionX + "px) translateY(" +
            positionY + "px)";
        draggedElement.style.filter = "drop-shadow(10px 10px 1px rgba(0,0,0,0.2))"
    };

    function onDragEnd() {
        draggedElement.style.filter = "drop-shadow(10px 10px 1px rgba(0,0,0,0.1))"
        draggedElement = null;
        grabPointX = null;
        grabPointY = null;
    };

    newNote.addEventListener('mousedown', onDragStart, false);
    document.addEventListener('mousemove', onDrag, false);
    document.addEventListener('mouseup', onDragEnd, false);
}

function getNoteTopBar() {
    let noteTopBar = document.createElement('span');
    noteTopBar.setAttribute('class', 'noteTopBar');

    let noteTopBarTitle = document.createElement('input');
    noteTopBarTitle.setAttribute('type', 'text');
    noteTopBarTitle.setAttribute('placeholder', 'title');

    let noteTopBarDeleteButton = document.createElement('button');
    noteTopBarDeleteButton.setAttribute('class', 'delete');
    noteTopBarDeleteButton.addEventListener('click', function (event) {
        let targetElement = event.target;
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
    noteContentArea.setAttribute('placeholder', 'content');
    return noteContentArea;
}

function getNewNote() {
    let newNote = getNoteDiv();
    newNote.appendChild(getNoteTopBar());
    newNote.appendChild(getNoteContentArea());

    let randomPositions = setRandomNotePosition(newNote);
    setDragEvent(newNote, randomPositions);

    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);