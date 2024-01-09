export const toggleModal = (ref) => (event) => {
  event.stopPropagation();

  const menu = ref.current;
  const elements = document.querySelectorAll('.simple-menu--open');

  if (menu.classList.contains('simple-menu--open')) {
    menu.classList.remove('simple-menu--open');
  } else {
    elements.forEach((element) => {
      element.classList.remove('simple-menu--open');
    });

    menu.classList.add('simple-menu--open');
  }
};