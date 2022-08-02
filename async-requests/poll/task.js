const pollRequestUrl = 'https://netology-slow-rest.herokuapp.com/poll.php';
const poll = document.querySelector('.poll');
const pollTitle = poll.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

function getPollData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', pollRequestUrl);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState === xhr.DONE) {
      fillPollAnswers(xhr.response.data, xhr.response.id);
    }
  })
}

function fillPollAnswers(data, pollId) {  
  //fill question
  pollTitle.insertAdjacentHTML('afterbegin', data.title);
  //fill answers
  data.answers.forEach(answer => {
    const newAnswer = document.createElement('button');
    newAnswer.classList.add('poll__answer');
    newAnswer.textContent = answer;
    pollAnswers.appendChild(newAnswer);
  })
  answersEventHandlers(pollId);  
}

function answersEventHandlers(pollId) {
  const answers = document.querySelectorAll('.poll__answer');
  answers.forEach(answer => {
    answer.addEventListener('click', e => {
      e.preventDefault();
      alert('Спасибо, ваш голос засчитан!');
      getPollStats(pollId, Array.from(answers).indexOf(e.target))
    })
  })
}

function getPollStats(pollId, answerId) {
  console.log(answerId);
  const xhr = new XMLHttpRequest;
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${pollId}&answer=${answerId}`);
  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState === xhr.DONE) {
      fillPollResults(xhr.response);
    }
  })
}

function fillPollResults(response) {
  //remove buttons
  while (pollAnswers.firstChild) {
    pollAnswers.removeChild(pollAnswers.firstChild);
  }
  //fill results
  response.stat.forEach(item => {
    const pollResultHTML = `
      <span>${item.answer}: </span><span style="font-weight: 700;">${item.votes}</span>
    `;
    const pollResult = document.createElement('div');
    pollResult.innerHTML = pollResultHTML;
    pollAnswers.appendChild(pollResult);
  })
}

getPollData();