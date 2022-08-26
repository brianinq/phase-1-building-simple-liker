// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");
errorModal.classList.add("hidden");

const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then((res) => {
        heart.innerHTML = heart.innerHTML === FULL_HEART ? EMPTY_HEART : FULL_HEART;
        heart.classList.toggle("activated-heart");
      })
      .catch((error) => {
        errorModal.classList.remove("hidden");
        errorModal.children[1].textContent = error;
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
