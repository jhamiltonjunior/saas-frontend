"use client";

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import Card from '../components/dashboard/dashboardCard';
import ChartCard from '../hook/ChartDashboardCard';
import Header from '../components/header/header'
import Nofity from '../components/modal/notify'
import ChatSuport from '../components/modal/chatSuport'
import { toggleModal } from '../hook/toggleModal'
import '../globals.css'
import './style.css'

import { faGoogle, faFacebook, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faMoneyCheckDolla } from '@fortawesome/fontawesome-svg-core'
// import { faMon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faGraduationCap, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faCircleCheck} /> */}
{/* <FontAwesomeIcon icon={faPersonCircleCheck} /> */}
{/* <FontAwesomeIcon icon={faHeartCircleCheck} /> */}
import { LineChart } from '../components/charts/line';
import { BarChart } from '../components/charts/bar';
import Feedback from '../components/feedback/feedback';
import MenuProfile from '../components/modal/menuProfile';
import NavBar from '../components/modal/navBar';
import Search from '../components/seach/search';

let receitasColor = 'rgba(0,128,0'; // Verde
let despesasColor = 'rgba(255,0,0'; // Vermelho
let lucroColor = 'rgba(68, 76, 230';

export default function Home() {
  const menuRef = useRef(null);
  const menuProfileRef = useRef(null);
  const chatSuportRef = useRef(null);
  const [openModal, setOpenModal] = useState(null);

  const toggleNotificationModal = toggleModal(menuRef);
  const toggleChatSuportModal = toggleModal(chatSuportRef)
  const toggleProfileModal = toggleModal(menuProfileRef);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = menuRef.current;
      let element = event.target;

      while (element) {
        if (element.classList.contains('menu-item')) {
          return
        }

        element = element.parentElement;
      }

      if (menu && !menu.contains(event.target) && !event.target.classList.contains('simple-menu--open')) {
        menu.classList.remove('simple-menu--open');
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {<Header onToggle={{
        toggleNotificationModal, toggleProfileModal, toggleChatSuportModal
      }} />}
      {<Nofity menuRef={menuRef} />}
      {<MenuProfile menuRef={menuProfileRef} />}
      {<ChatSuport menuRef={chatSuportRef} />}
      {<NavBar />}

    
      <main  className="flex min-h-screen w-screen justify-between p-24">
        <Search />
      </main>
    </>

  );
}
