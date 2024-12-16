const modal = document.querySelector('.backdrop');

const modalBtnOpen = document.querySelectorAll('.modal-button-open');
const modalBtnClose = document.querySelectorAll('.modal-button-close');

const toggleModal = () => modal.classList.toggle('is-hidden');
modalBtnOpen.forEach(function (buttons) {
  buttons.addEventListener('click', toggleModal);
});
modalBtnClose.forEach(function (buttons) {
  buttons.addEventListener('click', toggleModal);
});
// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);
