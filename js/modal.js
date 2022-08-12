(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Добавлена возможность закрытия модального окна по нажатию кнопки Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      refs.modal.classList.add('backdrop--is-hidden'), refs.body.classList.remove('no-scroll');
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
    // Отключение скролла при вызове модальной формы
    refs.body.classList.toggle('no-scroll');
  }
})();
