/// <reference lib="dom" />

const button = document.getElementById('double-sizes');

/** @type {HTMLElement[]} */
const boxes = Array.from(document.querySelectorAll('.box'));

/**
 *
 * @param {HTMLElement} element
 */
const doubleWidth = (element) => {
  const width = element.offsetWidth;

  element.style.width = `${width * 2}px`;
};

if (button) {
  button.addEventListener('click', function buttonClickHandler() {
    boxes.forEach(doubleWidth);

    // const widths = boxes.map((box) => box.offsetWidth);

    // boxes.forEach(function boxesForEach(box, i) {
    //   box.style.width = `${widths[i] * 2}px`;
    // });
  });
}
