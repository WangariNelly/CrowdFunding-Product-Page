const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const modalWrapper = document.getElementById("modalWrapper");
const continueBtn = document.getElementsByClassName("continueBtn");
const thankyouModal = document.getElementById("thankyou");
const closebtn = document.getElementById("closebtn");
const gotIt = document.getElementById("closeThankyou");
const thankyouWrapper = document.getElementById("thankyouWrapper");
let bookmark = document.getElementById("bookmark");
let bookmark_text = document.querySelector(".bookmark");
const closeMenu = document.getElementById("close_Menu");
const menuToggle = document.getElementById("menuToggle");
const menuHamburger = document.getElementById("menuHamburger");

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

 function createPledgeInput() {
  const label = document.createElement('label');
  const labelText = document.createTextNode('Enter your pledge');
  const input = document.createElement('input');

  label.appendChild(labelText);
  label.classList.add('hidden');  input.type = 'number';
  input.id = 'pledgeAmount';
  input.placeholder = '$ 25';
  input.classList.add('hidden');  
  
  const container = document.getElementById('pledge-no--reward');
  container.appendChild(label);
  label.appendChild(input);

}

// Call the function to create the pledge input element
createPledgeInput();

const showRadio = document.querySelectorAll('.showRadio')[0];
showRadio.addEventListener('change', () => {
  console.log('Button clicked'); 
  const label = document.getElementById('pledgeLabel');
  const input = document.getElementById('pledgeAmount');


  if (showRadio.checked) { // Check if radio button is checked
    label.classList.remove('hidden');
    input.classList.remove('hidden');
  } else {
    label.classList.add('hidden');
    input.classList.add('hidden');
  }
});

//menu

menuToggle.addEventListener('click', () => {
  menuToggle.style.display = 'none';
  closeMenu.style.display = 'block';
  menuHamburger.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none';
  menuToggle.style.display = 'block';
  menuHamburger.style.display = 'none';
});