const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const modalWrapper = document.getElementById('modalWrapper');
const noReward = document.getElementById('noReward');
const continueBtn = document.getElementById('continueBtn');
const thankyouModal = document.getElementById('thankyou');
const closebtn = document.getElementById('close');
const gotIt = document.getElementById('closeThankyou');
const thankyouWrapper = document.getElementById('thankyouWrapper')


openModal.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('fixed');
};

continueBtn.onclick = function() {
    modal.style.display = "none";
    thankyouModal.style.display = "block";
};

closebtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('fixed');
}

gotIt.onclick = function() {
    thankyouModal.style.display = "none";
    document.body.classList.remove('fixed');
}

