/// <reference lib="dom" />

// Variables to track dragging state and mouse coordinates
let isDragging = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

/**
 * @typedef {object} selectableOptions
 * @property {string} container
 * @property {string} itemsClass
 */

// Get all items within the container
/** @type {HTMLElement[]} */
let items = [];

/**
 *
 * @param {selectableOptions} param0
 */
export default function selectables({ container, itemsClass }) {
  const containerEl = document.querySelector(container);

  if (containerEl) {
    items = Array.from(containerEl.querySelectorAll(itemsClass));

    // Event listener for mouse down event on the container
    containerEl.addEventListener('mousedown', (evt) => {
      // Start tracking mouse movement and save initial coordinates
      isDragging = true;
      startX = evt.clientX;
      startY = evt.clientY;
    });

    // Event listener for mouse move event on the document
    containerEl.addEventListener('mousemove', (evt) => {
      // Update end coordinates if dragging
      if (isDragging) {
        endX = evt.clientX;
        endY = evt.clientY;
      }
    });

    // Event listener for mouse up event on the document
    containerEl.addEventListener('mouseup', () => {
      // Stop tracking mouse movement and perform selection check
      isDragging = false;
      highlightSelectedItems(items);
    });
  }
}

/**
 * Function to highlight selected items based on the drag selection
 * @param {string} itemsClass
 * @returns
 */
function highlightSelectedItems(itemsClass) {
  // Get the container element
  const container = document.getElementById('container');
  if (!container) {
    return;
  }

  //  console.log('items', items);

  // Calculate the selection rectangle coordinates
  const minX = Math.min(startX, endX);
  const minY = Math.min(startY, endY);
  const maxX = Math.max(startX, endX);
  const maxY = Math.max(startY, endY);

  // Loop through all items and check if they fall within the selection rectangle
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const rect = item.getBoundingClientRect();

    // Add or remove 'selected' class based on selection
    if (rect.left < maxX && rect.right > minX && rect.top < maxY && rect.bottom > minY) {
      item.classList.add('border');
    } else {
      item.classList.remove('border');
    }
  }
}
