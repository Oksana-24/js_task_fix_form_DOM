'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  if (!input.id && input.name) {
    input.id = input.name;
  }

  if (!input.name) {
    return;
  }

  const label = document.createElement('label');
  const formattedName = textToCapitalize(input.name);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = formattedName;
  input.placeholder = formattedName;

  input.before(label);
});

function textToCapitalize(text) {
  if (!text) {
    return '';
  }

  return (
    text.charAt(0).toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .slice(1)
  );
}
