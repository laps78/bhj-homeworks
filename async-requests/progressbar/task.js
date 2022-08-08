const progressBar = document.getElementById('progress');
const sendBtn = document.querySelector('#send');
const form = document.forms.form;

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  const formData = new FormData(form); 
  formData.append('file', form.file.files[0]);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.addEventListener('progress', function (progress) {
    console.log(progress.loaded);
    progressBar.value = progress.loaded / form.file.files[0].size;
  });
  xhr.send(formData);
});