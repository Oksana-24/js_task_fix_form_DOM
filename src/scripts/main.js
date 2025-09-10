'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  if (!input.id && input.name) {
    input.id = input.name;
  }

  const label = document.createElement('label');
  const formattedName = textToCapitalize(input.name);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = formattedName;
  input.placeholder = formattedName;

  input.before(label);
});

function textToCapitalize(text) {
  return (
    text.charAt(0).toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .slice(1)
  );
}
