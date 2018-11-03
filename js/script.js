'use strict';

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function setDragEvent(newNote) {
    let draggedElement;
    let grabPointY;
    let grabPointX;
    let offsetX = 0;
    let offsetY = 0;

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

        draggedElement.style.transform = "translateX(" + positionX + "px) translateY(" + positionY + "px)";
    };

    function onDragEnd() {
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

    setDragEvent(newNote);

    return newNote;
}

document.getElementById('addNote').addEventListener('click', function () {
    let newNote = getNewNote();
    document.body.appendChild(newNote);
}, false);