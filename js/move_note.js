'use strict';

function setDragEvent(newNote, notePosition) {

    let draggedNote;
    let grabPointY;
    let grabPointX;
    let offsetX = notePosition[0];
    let offsetY = notePosition[1];

    function onDragStart(event) {

        if (event.target.className.indexOf('noteTopBar') === -1) {
            return;
        }
        draggedNote = this;
        grabPointY = event.clientY - offsetY;
        grabPointX = event.clientX - offsetX;
    };

    function onDrag(event) {

        if (!draggedNote) {
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
        draggedNote.style.transform = "translateX(" +
            positionX + "px) translateY(" +
            positionY + "px)";
        draggedNote.style.filter = "drop-shadow(10px 10px 1px rgba(0,0,0,0.2))"
    };

    function onDragEnd() {

        draggedNote.style.filter = "drop-shadow(10px 10px 1px rgba(0,0,0,0.1))"

        draggedNote = null;
        grabPointX = null;
        grabPointY = null;

    };

    newNote.addEventListener('mousedown', onDragStart, false);
    document.addEventListener('mousemove', onDrag, false);
    document.addEventListener('mouseup', onDragEnd, false);
}
