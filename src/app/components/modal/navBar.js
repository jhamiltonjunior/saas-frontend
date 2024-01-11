import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { toggleModal } from '@/app/hook/toggleModal';



function NavBar ({ children, className = '' }) {
  const navBarRef = useRef(null);

  const toggleNavBar = toggleModal(navBarRef, 'main_nav_bar--open');


  return (
    <div ref={navBarRef} className={"main_nav_bar fixed top-0 left-0 border-r border-slate-400" + className}>
      <div className="flex flex-row relative h-ful w-full justify-between items-center">
        <div 
        onClick={toggleNavBar}
        className="toggle_main_nav_bar absolute top-10 border border-slate-400 cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        Dashboard
      </div>
    </div>
  )
}

export default NavBar;