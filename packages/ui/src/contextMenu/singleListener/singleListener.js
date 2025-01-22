/**
 * adding individual event listeners to hundreds of elements is inefficient.
 * A better approach is event delegation, where you attach a single event listener to a common container.
 * The event listener will then filter events based on the target element that triggered the event.
 */
const contextMenu = document.getElementById('customMenu');
const container = document.querySelector('.container');

container.addEventListener('contextmenu', (event) => {
  // Check if the right-clicked element is a target element
  const target = event.target;
  if (target.classList.contains('target-element')) {
    event.preventDefault(); // Prevent the default context menu

    // Get the target element's bounding box
    const rect = target.getBoundingClientRect();

    // Calculate the center position of the target element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Position the context menu at the center of the target element
    contextMenu.style.left = `${centerX - contextMenu.offsetWidth / 2}px`;
    contextMenu.style.top = `${centerY - contextMenu.offsetHeight / 2}px`;

    // Display the context menu
    contextMenu.style.display = 'block';
  }
});

// Hide the context menu when clicking anywhere else
document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});
