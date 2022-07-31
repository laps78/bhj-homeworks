const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const requestUrl = 'https://netology-slow-rest.herokuapp.com';
const currencyHTML = `<div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div>`;

function hideLoader() {
  if (loader.classList.contains('loader_active')) {
    loader.classList.remove('loader_active');
  }
}

function showLoader() {
  if (!loader.classList.contains('loader_active')) {
    loader.classList.add('loader_active');
  }
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestUrl, true);
  xhr.send();
  xhr.onload = responseHandler(xhr);
}

function responseHandler(xhr) {
  if (xhr.readyState === xhr.DONE) {
    hideLoader();
    console.log(xhr.responseText);
  }
  
}

function localStorageUpdater() {
  
}

makeRequest();