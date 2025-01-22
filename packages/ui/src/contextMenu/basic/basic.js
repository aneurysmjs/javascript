const contextMenu = document.getElementById('customMenu');
const targetElement = document.querySelector('.target-element');

targetElement.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent the default context menu

  // Get the target element's bounding box
  const rect = targetElement.getBoundingClientRect();

  // Calculate the center position of the target element
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Position the context menu at the center of the target element
  contextMenu.style.left = `${centerX - contextMenu.offsetWidth / 2}px`;
  contextMenu.style.top = `${centerY - contextMenu.offsetHeight / 2}px`;

  // Display the context menu
  contextMenu.style.display = 'block';
});

// Hide the context menu when clicking anywhere else
document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});
