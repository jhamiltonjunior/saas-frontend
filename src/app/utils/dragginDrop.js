export function dragAndDrop() {
  let draggedElem = null;

  const parentElem = parentRef.current;
    const children = Array.from(parentElem.children);

    children.forEach((child) => {
      child.draggable = true;

      child.addEventListener('dragstart', (event) => {
        draggedElem = child;
      });
    });

    parentElem.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    parentElem.addEventListener('drop', (event) => {
      event.preventDefault();
      const dropzone = event.target;

      // Check if dropzone is not the same as the draggedElem and is a direct child of the parent
      if (dropzone !== draggedElem && dropzone.parentNode === parentElem) {
        parentElem.insertBefore(draggedElem, dropzone);
      }
    });

     children.forEach((child) => {
      child.draggable = true;

      child.addEventListener('dragstart', (event) => {
        draggedElem = child;
        draggedElem.classList.add('dragging');
      });
    });

  parentElem.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  parentElem.addEventListener('drop', (event) => {
    event.preventDefault();
    const dropzone = event.target;

    // Check if dropzone is not the same as the draggedElem and is a direct child of the parent
    if (dropzone !== draggedElem && dropzone.parentNode === parentElem) {
      parentElem.insertBefore(draggedElem, dropzone);
    }

    draggedElem.classList.remove('dragging');
  });
}