const userId = document.querySelector('#user_id');
const signIn = document.querySelector('#signin');
const form = document.forms[0];
const formData = new FormData(form);
const requestTargetUrl = 'https://netology-slow-rest.herokuapp.com/auth.php';
const loginButton = form.querySelector('#signin__btn');
const welcomer = document.querySelector('#welcome');

if (localStorage.user_id) {
  login(localStorage.user_id);
}

loginButton.addEventListener('click', e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', requestTargetUrl);
  xhr.responseType = 'json';
  formData.append('login', form.login.value);
  formData.append('password', form.password.value);
  xhr.send(formData);
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE) {
      responseHandler(xhr);
    }
  });
});

function responseHandler(xhr) {
  console.log(xhr.response);
  if (xhr.response.success === true) {
    login(xhr.response.user_id);
  }
}

function login(user_id) {
  signIn.classList.remove('signin_active');
  userId.textContent = user_id;
  welcomer.classList.add('welcome_active');
  localStorage.setItem('user_id', user_id);
  logOut();
}

function logOut() {
  const logOutButton = document.createElement('button');
  logOutButton.classList.add('logout__button');
  logOutButton.textContent = 'Выйти';
  welcomer.insertAdjacentElement('afterend', logOutButton);

  logOutButton.addEventListener('click', e => {
    welcomer.classList.remove('welcome_active');
    signIn.classList.add('signin_active');
    logOutButton.remove();
    localStorage.clear();
  })
}