// Defining text characters for the empty and full hearts for you to use later.
let EMPTY_HEART = '♡'
let FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
modal.classList.add('hidden');

const hearts = document.querySelectorAll('.like-glyph')

for( let heart of hearts) {
  heart.addEventListener('click', like)
}

function like(event) {
  if (event.target.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        event.target.innerText = FULL_HEART;
        event.target.classList.toggle('activated-heart');
      })
      .catch(error => {
        modal.classList.toggle('hidden')
        message.innerText = error
        setTimeout(() => modal.classList.toggle('hidden'), 3000);
      })
  }
  if (event.target.innerText === FULL_HEART) {
    event.target.innerText = EMPTY_HEART;
    event.target.classList.toggle('activated-heart');
  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
