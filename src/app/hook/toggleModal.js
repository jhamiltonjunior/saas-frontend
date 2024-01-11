export const toggleModal = (ref, className = 'simple-menu--open', direction = 'none') => (event) => {
  event.stopPropagation();

  const menu = ref.current;
  const elements = document.querySelectorAll('.' + className);

  if (menu.classList.contains(className)) {
    menu.classList.contains(direction) ? menu.classList.remove(direction) : ''
    menu.classList.remove(className);
  } else {
    elements.forEach((element) => {
      element.classList.remove(direction);
      element.classList.remove(className);
    });

    direction === 'animate_down' ? menu.classList.add(direction) : menu.classList.add(className)
   
  }
};