"use client";

import { useEffect, useRef, useState } from 'react';
// import Header from '../components/header/header'
// import Nofity from '../components/modal/notify'
// import ChatSuport from '../components/modal/chatSuport'
import { toggleModal } from '@/app/hook/toggleModal'
import '../../../globals.css'
import '../style.css'
import './style.css'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";


export default function Calendar({ menuRef }) {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.fc-today-button').innerHTML = 'teste'
        });
    }, []);

    return (
        <aside ref={menuRef} className="fixed w-screen top-[-100%] left-0 right-0 bg-[rgba(0_0_0/.8)] flex justify-center items-center z-[101]">
            <div className="max-w-[22rem] w-full bg-white p-8 rounded-xl shadow-md overflow-hidden">
                <header className=""></header>
                <FullCalendar
                    className="calendar bg-white" // Adicione esta linha
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    height="auto"
                    aspectRatio={2}
                    titleFormat={{ year: 'numeric', month: 'long' }}
                    moreLinkClassNames='cursee'


                    dayMaxEventRows={2}
                    locale="pt-br"

                    dateClick={function(info) {
                        console.log(info)
                        alert('Data clicada: ' + info.dateStr);
                    }}
                    headerToolbar={{
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    }}
                />
            </div>

            {/* {showMonthSelect && <MonthSelect onMonthChange={handleMonthChange} />} */}

        </aside>

    );
}
