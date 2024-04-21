/// <reference lib="dom" />

import selectable from './selectable.mjs';

selectable({
  container: '#container',
  itemsClass: '[data-line-number]',
});

// @ts-check

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('addComment');

//   const btn = document.getElementById('addComment');

//   btn?.addEventListener('click', () => {
//     /** @type {HTMLInputElement | null} */
//     const commentInput = document.querySelector('#commentInput');

//     const commentText = commentInput?.value ?? '';

//     var codeBlock = document.getElementById('codeBlock');
//     // Create a new comment element
//     /** @type {HTMLDivElement} */
//     const commentElement = document.createElement('div');

//     commentElement.className = 'comment';
//     commentElement.innerText = commentText;
//     // Append the comment element to the comments container
//     const commentsContainer = document.querySelector('#commentsContainer');

//     if (commentsContainer) {
//       commentsContainer.appendChild(commentElement);
//     }

//     // Clear the comment input field
//     if (commentInput) {
//       commentInput.value = '';
//     }
//   });

//   console.log('btn', btn);
// });
