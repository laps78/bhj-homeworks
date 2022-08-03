const editor = document.querySelector('#editor');
const deleteBtn = document.querySelector('#delete');

function fillFromLS() {
  if (localStorage.cashedText) {
    editor.value = localStorage.cashedText;
  }
}

function editorCashe() {
  const editorValue = editor.value;
  localStorage.setItem('cashedText', editorValue);
}

function clearTextArea(e) {
  e.preventDefault();
  editor.value = '';
  editorCashe();
}

editor.addEventListener('change', editorCashe);
deleteBtn.addEventListener('click', e => {
  clearTextArea(e);
});