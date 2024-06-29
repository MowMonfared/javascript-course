//Ex. 12a
/*
const add = function () {
  console.log(2 + 3);
};

add();
add();
*/

//Ex. 12b
/*
const add = function () {
  console.log(2 + 3);
};

function runTwice(func) {
  func();
  func();
}

runTwice(function () {
  console.log('12b');
});

runTwice(add);
*/

//Ex. 12c
/*
function toggle1() {
  const button = document.querySelector('.js-toggle');

  setTimeout(function () {
    document.querySelector('.js-toggle').innerHTML = 'Finished!';
  }, 1000);
}
*/

//Ex. 12d
/*
function toggle1() {
  document.querySelector('.js-toggle').innerHTML = 'Loading...';
  setTimeout(function () {
    document.querySelector('.js-toggle').innerHTML = 'Finished!';
  }, 1000);
}
*/

//Ex. 12e
/*
function displayMessage() {
  document.querySelector('.js-added-message').innerHTML = `<p>Added</p>`;
  setTimeout(function () {
    document.querySelector('.js-added-message').innerHTML = ``;
  }, 2000);
}
*/

//Ex. 12f
/*
let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('.js-added-message');
  messageElement.innerHTML = `<p>Added</p>`;

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    messageElement.innerHTML = ``;
  }, 2000);
}
  */

//Ex. 12g
/*
  setInterval(function () {
    if (document.title === 'App') {
      document.title = '(2) New messages';
    } else {
      document.title = 'App';
    }
  }, 1000);
*/

//Ex. 12h
/*
let messages = 2;

setInterval(function () {
  if (document.title === 'App') {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'App';
  }
}, 1000);
*/

//Ex. 12i
let messages = 2;

// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;

// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function () {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}
