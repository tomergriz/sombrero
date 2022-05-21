//replace with your user:

const GITHUB_URL = "https://api.github.com/users/tomergriz";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    // update the profileImage and profileName with the information retrieved.

    profileImage.src = data.avatar_url;
    profileName.innerText = data.login;
  });

const myCard = document.getElementById("card");

myCard.onmouseover = function () {
  mouseOver()
};
myCard.onmouseout = function () {
  mouseOut()
};
myCard.onmousedown = function () {
  mouseDown()
};
myCard.onmouseup = function () {
  mouseUp()
};

function mouseOver() {
  myCard.classList.add("cardRotate");
}

function mouseOut() {
  myCard.classList.remove("cardRotate");
}

function mouseDown() {
  myCard.classList.add("cardBackgroundChange");
}

function mouseUp() {
  myCard.classList.remove("cardBackgroundChange");
}