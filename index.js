const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const modalWrapper = document.getElementById("modalWrapper");
const noReward = document.getElementById("noReward");
const continueBtn = document.getElementsByClassName("continueBtn");
const thankyouModal = document.getElementById("thankyou");
const closebtn = document.getElementById("closebtn");
const gotIt = document.getElementById("closeThankyou");
const thankyouWrapper = document.getElementById("thankyouWrapper");
let bookmark = document.getElementById("bookmark");
let bookmark_text = document.querySelector(".bookmark");
const labels = document.querySelectorAll("label");
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.querySelector('.menu ul');

//opens the modal
openModal.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("fixed");
};
// opens the thankyou note
for (let button of continueBtn) {
  button.addEventListener("click", () => {
    modal.style.display = "none";
    thankyouModal.style.display = "block";
  });
}

closebtn.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("fixed");
};

gotIt.onclick = function () {
  thankyouModal.style.display = "none";
  document.body.classList.remove("fixed");
};

//bookmark

let bookmarked = false;

bookmark.addEventListener("click", () => {
  bookmarked = !bookmarked;
  bookmarked
    ? (bookmark_text.innerText = "Bookmarked")
    : (bookmark_text.innerText = "Bookmark");
});

//Pledge input modal pop-up





//menu toggle
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle active class on the menu list
  menuToggle.classList.toggle('hidden'); // Toggle hidden class on the menuToggle (optional for styling)
  closeMenu.classList.toggle('active'); // Toggle active class on the closeMenu icon
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active'); // Remove active class from the menu list
  menuToggle.classList.remove('hidden'); // Remove hidden class from menuToggle (optional for styling)
  closeMenu.classList.remove('active'); // Remove active class from closeMenu icon
});


