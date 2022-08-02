const progressBar = document.getElementById('progress');
const sendBtn = document.querySelector('#send');

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  const formData = new FormData(document.forms.form);
  
  console.log(formData);
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  xhr.upload.addEventListener('progress', function (progress) {
    console.log(progress.loaded);
    progressBar.value = progress.loaded / progress.total;
  });
});