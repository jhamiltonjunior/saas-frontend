'use client';

import { useEffect, useRef } from 'react';
import '../style.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane,
  faGear,
  faArrowUpRightFromSquare,
  faToggleOn,
  faTrashCan,
  faFaceSmile,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MiniConfig from '../miniConfig';
import { toggleModal } from '@/app/hook/toggleModal';

export default function ManageFinance({ menuRef }) {
  const miniCofingLeftRef = useRef(null);
  const miniCofingRightRef = useRef(null);
  const miniCofingAttachmentRef = useRef(null);
  const manageRef = useRef(null);

  const toggleMiniConfigLeft = toggleModal(miniCofingLeftRef, 'mini_config--open');
  const toggleMiniConfigRight = toggleModal(miniCofingRightRef, 'mini_config--open');
  const toggleMiniConfigAttachment = toggleModal(miniCofingAttachmentRef, 'mini_config--open');

  const onSumitForm = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const textarea = document.querySelector('.chat_suport_send_message textarea');
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }

    const element = manageRef.current;
    element.scrollTop = element.scrollHeight;
  }, [])

  return (

    <section ref={menuRef} className="chat-suport finance-modal modal border border-solid border-slate-200">

      {/*<MiniConfig className="top-16 left-1" content={*/}
      {/*  <div className="flex flex-row justify-center items-center">*/}
      {/*    <p className="cursor-pointer m-0 w-full">*/}
      {/*      Abrir Whatsapp Web  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />*/}
      {/*    </p>*/}
      {/*   </div>*/}
      {/*  }*/}
      {/*  toggleMenu={miniCofingLeftRef}*/}
      {/*/>*/}

      {/*<MiniConfig className="top-16 right-3" content={*/}
      {/*  <>*/}
      {/*    <div className="flex flex-row justify-center items-center">*/}
      {/*      <p className="cursor-pointer m-0 w-full">*/}
      {/*        Deseja enviar com Enter? <FontAwesomeIcon icon={faToggleOn} />*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-row justify-center items-center">*/}
      {/*    <p className="cursor-pointer m-0 w-full">*/}
      {/*      Deseja encerrar o chat? <FontAwesomeIcon icon={faTrashCan} />*/}
      {/*    </p>*/}
      {/*    </div>*/}
      {/*  </>*/}
      {/*  }*/}
      {/*  toggleMenu={miniCofingRightRef}*/}
      {/*/>*/}

      {/*<MiniConfig className="top-16 left-3" content={*/}
      {/*  <>*/}
      {/*    <div className="flex flex-row justify-center items-center">*/}
      {/*      <p className="cursor-pointer m-0 w-full">*/}
      {/*        Deseja Anexar Arquivos?*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-row justify-center items-center">*/}
      {/*      <p className="m-0 w-full">*/}
      {/*        Arquivos Anexados:*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-row justify-center items-center">*/}
      {/*      <p className="m-0 w-full">*/}
      {/*        smirnofy.png*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </>*/}
      {/*  }*/}
      {/*  toggleMenu={miniCofingAttachmentRef}*/}
      {/*/>*/}


      <div className="chat_suport_header sticky top-0 flex justify-between items-center px-6">
        {/*<div className="font-bold" onClick={toggleMiniConfigLeft}>*/}
        {/*   <FontAwesomeIcon className="font-bold cursor-pointer" icon={faWhatsapp} />*/}
        {/*</div>*/}
        
        <h2>gerenciamento</h2>

        {/*<div onClick={toggleMiniConfigRight}>*/}
        {/*  <FontAwesomeIcon className="cursor-pointer" icon={faGear} />*/}
        {/*</div>*/}

      </div>

      {/* simples divs para simular notificao em linha */}

      <div ref={manageRef} className="chat_suport_container p-6">
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

      <div className="chat_suport_send_message z-50">
        <form onSubmit={onSumitForm} className="flex justify-between p-6">
          <textarea className=" border-slate-200 p-2 w-full text-chat" type="text" placeholder="Digite sua mensagem" ></textarea>

          <div className="container_writer_message flex justify-between w-full border-b border-l border-r border-slate-200 pt-6 pb-2 pl-2 pr-2">
            <div className="text-slate-800">
              <button className="reset_button">
                <FontAwesomeIcon icon={faFaceSmile} />
              </button>
              <button className="reset_button" onClick={toggleMiniConfigAttachment}>
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
            </div>
            <button className="send-message bg-primary-color text-white p-2 rounded-md w-1/5">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>

    </section>
  )
}
