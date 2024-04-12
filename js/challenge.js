// See the timer increment every second once the page has loaded.
let counter = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    counter++;
    document.getElementById('counter').innerText = counter;
  }, 1000);
}

window.addEventListener('load', startTimer);

// Manually increment and decrement the counter using the plus and minus buttons.
function handleButtonClick(event) {
  if (event.target.id === 'plus') {
    counter++;
  } else if (event.target.id === 'minus') {
    counter--;
  }

  document.getElementById('counter').innerText = counter;
}

document.getElementById('plus').addEventListener('click', handleButtonClick);
document.getElementById('minus').addEventListener('click', handleButtonClick);

// Like an individual number of the counter.
let likes = {};

function handleHeartClick() {
  if (counter in likes) {
    likes[counter]++;
  } else {
    likes[counter] = 1;
  }

  let list = document.querySelector('.likes');
  let item = document.createElement('li');
  item.innerText = `${counter} has ${likes[counter]} like(s)`;
  list.appendChild(item);
}

document.getElementById('heart').addEventListener('click', handleHeartClick);

// Pause and resume the counter.
let isPaused = false;

function handlePauseClick() {
  if (isPaused) {
    startTimer();
    isPaused = false;
    document.getElementById('pause').innerText = 'pause';
  } else {
    clearInterval(timer);
    isPaused = true;
    document.getElementById('pause').innerText = 'resume';

    // Disable all buttons except the pause button.
    let buttons = document.querySelectorAll('button');
    for (let button of buttons) {
      if (button.id !== 'pause') {
        button.disabled = true;
      }
    }
  }
}

document.getElementById('pause').addEventListener('click', handlePauseClick);

// Leave comments on gameplay.
function handleCommentSubmit(event) {
  event.preventDefault();

  let comment = document.getElementById('comment-input').value;
  let list = document.getElementById('list');
  let item = document.createElement('li');
  item.innerText = comment;
  list.appendChild();
}