'use client';

import { useEffect, useRef } from 'react';
import './style.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faGear } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function ChatSuport({ menuRef }) {

  useEffect(() => {
    const textarea = document.querySelector('.chat_suport_send_message textarea');
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }
  }, [])

  return (

    <section ref={menuRef} className="chat-suport modal border border-solid border-slate-200">
      <div className="chat_suport_header sticky top-0 flex justify-between items-center px-6">
        <div className="font-bold">
           <FontAwesomeIcon className="font-bold" icon={faWhatsapp} />
        </div>
        
        <h2>Suporte</h2>

        <div>
          <FontAwesomeIcon icon={faGear} />
        </div>

      </div>

      {/* simples divs para simular notificao em linha */}

      <div className="chat_suport_container p-6">
        <div className="flex justify-end w-full items-center">
          <div className="text-start message-receiver message-chat_suport border border-solid flex flex-col justify-between w-2/4 items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="flex justify-start w-full items-center">
          <div className="text-start message-sender message-chat_suport border border-solid flex flex-col justify-between w-2/4 items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="flex justify-start w-full items-center">
          <div className="text-start message-sender message-chat_suport border border-solid flex flex-col justify-between w-2/4">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div className="flex justify-end w-full items-center">
          <div className="text-start message-receiver message-chat_suport border border-solid flex flex-col justify-between w-2/4 items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">
              Lorem ipsum dolor sit amet consecteisicing elit
              Lorem ipsum dolor sit amet consectetur isicing elit.
              Lorem ipsum dolor sittetur adipisicing elit.
              Lorem  amet consecteturicing elit.
            </p>
          </div>
        </div>

        <div className="flex justify-end w-full items-center">
          <div className="text-start message-receiver message-chat_suport border border-solid flex flex-col justify-between w-2/4 items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">
              Loremm dolor sit amet consectetur adipisicing elit
              Lorem ipsum dolor sit amet consectetur icing elit.
              Lorem iconsectetur adipisicing elit.
              Lorem ipsum dolor sit amesectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="flex justify-end w-full items-center">
          <div className="text-start message-receiver message-chat_suport border border-solid flex flex-col justify-between w-2/4 items-end">
            {/* <p className="text-sm font-semibold">Nome do usuario</p> */}
            <p className="text-black w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              Lorem ipsum dolornsectetur adipisicing elit.
              Lorem ipsum dolor dipisicing elit.
              Lorem ipsum dolor sit ameipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="chat_suport_send_message">
        <form className="flex justify-between p-6">
          <textarea className=" border-slate-200 p-2 w-full text-chat" type="text" placeholder="Digite sua mensagem" ></textarea>

          <div className="flex justify-end w-full border-b border-l border-r border-slate-200 pt-6 pb-2 pl-2 pr-2">
            <button className="send-message bg-primary-color text-white p-2 rounded-md w-1/5">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default ChatSuport;