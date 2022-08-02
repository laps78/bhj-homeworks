const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const requestUrl = 'https://netology-slow-rest.herokuapp.com';
let localStorageArray = [];

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

function cleanValutesList() {
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  };
}

function makeValuteList(valutes) {
  cleanValutesList();
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

  //save to LS
  saveValuteToLS(valute.CharCode, valute.Value);
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestUrl, true);
  xhr.responseType = 'json';
  xhr.send();
  cleanValutesList();
  showLoader();
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

function saveValuteToLS(item, value) {
  localStorageArray.push({ CharCode: item, Value: value });
  localStorage.setItem('valutesArray', JSON.stringify(localStorageArray));
}

function loadValutesFromLS () {
  if (localStorage.valutesArray) {
    localStorageArray = JSON.parse(localStorage.valutesArray);
    localStorageArray.forEach(elem => makeValute(elem));
  }
}

loadValutesFromLS();

makeRequest();