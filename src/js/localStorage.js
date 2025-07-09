const inputs = [
  document.querySelector('#title'),
  document.querySelector('#autor'),
  document.querySelector('#gender'),
  document.querySelector('#rate'),
  document.querySelector('#user')
];

function saveFormData() {
  const formData = {
    title: inputs[0]?.value || '',
    autor: inputs[1]?.value || '',
    gender: inputs[2]?.value || '',
    rate: inputs[3]?.value || '',
    user: inputs[4]?.value || ''
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
  const saved = localStorage.getItem('formData');
  if (saved) {
    const formData = JSON.parse(saved);
    if (inputs[0]) inputs[0].value = formData.title || '';
    if (inputs[1]) inputs[1].value = formData.autor || '';
    if (inputs[2]) inputs[2].value = formData.gender || '';
    if (inputs[3]) inputs[3].value = formData.rate || '';
    if (inputs[4]) inputs[4].value = formData.user || '';
  }
}

inputs.forEach(input => {
  if (input) input.addEventListener('input', saveFormData);
});

window.addEventListener('DOMContentLoaded', loadFormData);
