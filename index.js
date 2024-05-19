const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const modalWrapper = document.getElementById('modalWrapper');
const noReward = document.getElementById('noReward');
const continueBtn = document.getElementsByClassName('continueBtn');
const thankyouModal = document.getElementById('thankyou');
const closebtn = document.getElementById('close');
const gotIt = document.getElementById('closeThankyou');
const thankyouWrapper = document.getElementById('thankyouWrapper')

//opens the modal
openModal.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('fixed');
};
// opens the thankyou note
for (let button of continueBtn) {
    button.addEventListener("click", () => {
      modal.style.display = "none";
      thankyouModal.style.display = "block";
    });
  };

closebtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('fixed');
};

gotIt.onclick = function() {
    thankyouModal.style.display = "none";
    document.body.classList.remove('fixed');
};