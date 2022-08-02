const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const requestUrl = 'https://netology-slow-rest.herokuapp.com';

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

function makeValuteList(valutes) {
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  };

  for (valute in valutes) {
    makeValute(valutes[valute]);
  }
}

function makeValute(valute) {
  const newEmptyDiv = document.createElement('div');
  newEmptyDiv.classList.add('item');
  const valuteDiv = items.appendChild(newEmptyDiv);
  const currencyHTML = `
    <div class="item__code">${valute.CharCode}</div>
    <div class="item__value">${valute.Value}</div>
    <div class="item__currency">руб.</div>
    `; 
  valuteDiv.insertAdjacentHTML('afterBegin', currencyHTML);
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestUrl, true);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('readystatechange', () => {
    responseHandler(xhr);
  });
}

function responseHandler(xhr) {
  if (xhr.readyState === xhr.DONE) {
    const valutes = xhr.response.response.Valute;
    makeValuteList(valutes);
    hideLoader();
  }
}

function localStorageUpdater() {
  
}

makeRequest();