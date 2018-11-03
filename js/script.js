'use strict';

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function setDragEvent(newNote) {
    let draggedEl;
    let grabPointY;
    let grabPointX;
    let offsetX = 0;
    let offsetY = 0;

    function onDragStart(ev) {
        if (ev.target.className.indexOf('noteTopBar') === -1) {
            return;
        }

        draggedEl = this;
        grabPointY = ev.clientY - offsetY;
        grabPointX = ev.clientX - offsetX;
    };

    function onDrag(ev) {
        if (!draggedEl) {
            return;
        }

        let posX = ev.clientX - grabPointX;
        let posY = ev.clientY - grabPointY;
        offsetX = posX;
        offsetY = posY;

        if (posX < 0) {
            posX = 0;
        }
        if (posY < 0) {
            posY = 0;
        }

        draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };

    function onDragEnd() {
        draggedEl = null;
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
    noteTopBarDeleteButton.addEventListener('click', function () {
        let targetElement = event.target || event.srcElement;
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