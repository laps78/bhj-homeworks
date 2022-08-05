const progressBar = document.getElementById('progress');
const sendBtn = document.querySelector('#send');
const form = document.forms.form;

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  const formData = new FormData(form);
  
  console.log(form.file.files[0]);//file seems to be defined
  
  formData.append('file', form.file.files[0]);
  
  console.log(formData);//seems to be empty
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  xhr.upload.addEventListener('progress', function (progress) {
    console.log(progress.loaded);
    progressBar.value = progress.loaded / form.file.files[0].size;
  });
});