import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



function NavBar ({ children, className = '' }) {
  return (
    <div className={"main_nav_bar fixed top-0 left-0 border-r border-slate-400" + className}>
      <div className="flex flex-row relative h-ful w-full justify-between items-center">
        <div className="toggle_main_nav_bar absolute top-10 border border-slate-400 cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default NavBar;