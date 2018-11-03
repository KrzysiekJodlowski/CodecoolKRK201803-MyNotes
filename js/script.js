"use strict";

function getNoteDiv() {
    let noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'noteDiv');
    return noteDiv;
}

function setDragEvent(newNote) {

    let dragItem = newNote;
    let dragBar = newNote.childNodes[0];

    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    dragBar.addEventListener("mousedown", dragStart, false);
    dragBar.addEventListener("mouseup", dragEnd, false);
    dragBar.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        dragBar = e.target || e.srcElement;

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === dragBar) {
            active = true;
        }
    }

    function dragEnd(e) {
        dragBar = e.target || e.srcElement;

        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        dragBar = e.target || e.srcElement;

        if (active) {

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPosition, yPosition, el) {
        el.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
    };

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