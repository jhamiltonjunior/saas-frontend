'use client';

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faComments } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faEnvelopeOpen} /> */}
{/* <FontAwesomeIcon icon={<FontAwesomeIcon icon={<FontAwesomeIcon icon={faEnvelopeOpenText} />} />} /> */}
// import { faBell } from '@fortawesome/free-brands-svg-icons'
// import { faGoogle, faFacebook, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faBell } from '@fortawesome/fontawesome-svg-core'
import { useEffect, useRef } from 'react';

import './style.css';

const image = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

function Header ({ onToggle }) {
  // const menuRef = useRef(null);

  // const menuToggle = () => {
  //   const menu = menuRef.current;
  //   if (menu.classList.contains('simple-menu--open')) {
  //     menu.classList.remove('simple-menu--open');
  //   } else {
  //     console.log('menuToggle');
  //     menu.classList.add('simple-menu--open');
  //   }
  // };

  return (
    <header className="main-header flex justify-between items-center">
      <section className="flex justify-between items-center w-full header-container">
        <div>
          pe
        </div>

        <div className="flex justify-between items-center menu-header rounded-full">
          {/* <p>n</p> */}
          <div className="cursor-pointer simple-menu-item" onClick={onToggle.menuToggle}>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </div>

          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faComments} />
          </div>

          <div className="container-img cursor-pointer menu-profile-item" onClick={onToggle.menuProfileToggle}>
            <Image
              src="/img/image.avif"
              className="rounded-full"
              alt="Descrição da imagem"
              width={40}
              height={40}
              />
          </div>
        </div>

      </section>
      
    </header>
  )
}

export default Header;