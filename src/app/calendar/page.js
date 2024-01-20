"use client";

import { useEffect, useRef, useState } from 'react';
import Header from '../components/header/header'
import Nofity from '../components/modal/notify'
import ChatSuport from '../components/modal/chatSuport'
import { toggleModal } from '../hook/toggleModal'
import '../globals.css'
import './style.css'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

import MenuProfile from '../components/modal/menuProfile';
import NavBar from '../components/modal/navBar';
import MonthSelect from '../components/calendar/changeMonth';

export default function Home() {
  const menuRef = useRef(null);
  const menuProfileRef = useRef(null);
  const chatSuportRef = useRef(null);
  const showStudentRef = useRef(null);
  const calendarRef = useRef(null);
  const [showMonthSelect, setShowMonthSelect] = useState(false);

  const toggleNotificationModal = toggleModal(menuRef);
  const toggleChatSuportModal = toggleModal(chatSuportRef)
  const toggleProfileModal = toggleModal(menuProfileRef);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    const calendarApi = calendarRef.current.getApi();
    const date = new Date(calendarApi.getDate());
    date.setMonth(month);
    calendarApi.gotoDate(date);
  };


  useEffect(() => {

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.fc-today-button').innerHTML = 'teste'
    });

    const handleClickOutside = (event) => {
      const menu = menuRef.current;
      const menuProfile = menuProfileRef.current;
      const chatSuport = chatSuportRef.current;
      const showStudent = showStudentRef.current;

      let element = event.target;

      while (element) {
        if (element.classList.contains('menu-item')) {
          return
        }

        element = element.parentElement;
      }

      if (menuProfile && !menuProfile.contains(event.target) && !event.target.classList.contains('simple-menu--open')) {
        menuProfile.classList.remove('simple-menu--open');
      }

      if (chatSuport && !chatSuport.contains(event.target) && !event.target.classList.contains('simple-menu--open')) {
        chatSuport.classList.remove('simple-menu--open');
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

      {/* <ConfirmAction menuRef={confirmActionRef} toggle={{toggleConfirmAction}} /> */}
    
      <main className="container_calendar justify-between">
        <FullCalendar
          ref={calendarRef}
          className="calendar" // Adicione esta linha
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="auto"
          aspectRatio={2} 
          events={[
            { title: 'Event 1', date: '2024-01-01T16:00:00', id: 1 },
            { title: 'Event 6', date: '2024-01-01T16:00:00', id: 1},
            { title: 'Event 7', date: '2024-01-01T16:00:00', id: 1},
            { title: 'Event 2', date: '2024-01-02', id: 1 },
            { title: 'Event 3', date: '2024-01-02', id: 1 },
            { title: 'Event 4', date: '2024-01-02', id: 1 },
            { title: 'Event 5', date: '2024-01-02', id: 1 },
          ]}

          // headerToolbar={{
          //   right: 'prev,next',
          //   center: 'title',
          //   left: 'today' // Adicione o botão personalizado aqui
          // }}

          

          dayMaxEventRows={2}
          locale="pt-br"

          // deixe os eventos de click aqui

          // customButtons={{
          //   customMonthSelect: {
          //     text: 'Selecione o mês',
          //     click: () => {
          //       // setShowMonthSelect(true); // Mostre o MonthSelect quando o botão for clicado
          //       console.log('teste')
          //       console.log(document.querySelector('.fc-today-button'))
          //       document.querySelector('.change_month_container').classList.toggle('change_month_container--active')
          //     }
          //   }
          // }}




          dateClick={function(info) {
            alert('Data clicada: ' + info.dateStr);
          }}

          editable={true} // enable draggable events
          droppable={true}

          drop={ function(info) {
            alert(info.event.title + " was dropped on " + info.event.start.toISOString());
        
            // is the "remove after drop" checkbox checked?
            if (document.getElementById('drop-remove').checked) {
              // if so, remove the element from the "Draggable Events" list
              info.event.remove();
            }
          }}

          eventClick={function(info) {
            console.log('Clicked on: ' + info.dateStr);
            console.log('Clicked on event: ' + info.event.title);

            console.log(info)
          }}
        />

        {/* {showMonthSelect && <MonthSelect onMonthChange={handleMonthChange} />} */}

      </main>
    </>

  );
}
