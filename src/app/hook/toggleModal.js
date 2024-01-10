export const toggleModal = (ref, className = 'simple-menu--open') => (event) => {
  event.stopPropagation();

  const menu = ref.current;
  const elements = document.querySelectorAll('.' + className);

  if (menu.classList.contains(className)) {
    menu.classList.remove(className);
  } else {
    elements.forEach((element) => {
      element.classList.remove(className);
    });

    menu.classList.add(className);
  }
};