'use client';

import { useEffect, useRef } from 'react';
import './style.css';
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
import MiniConfig from './miniConfig';
import { toggleModal } from '../../hook/toggleModal';
import Select from 'react-select'
import Switch from '@mui/material/Switch';


function ChatSuport({ menuRef }) {
  const miniCofingLeftRef = useRef(null);
  const miniCofingRightRef = useRef(null);
  const miniCofingAttachmentRef = useRef(null);
  const chatRef = useRef(null);

  const toggleMiniConfigLeft = toggleModal(miniCofingLeftRef, 'mini_config--open');
  const toggleMiniConfigRight = toggleModal(miniCofingRightRef, 'mini_config--open');
  const toggleMiniConfigAttachment = toggleModal(miniCofingAttachmentRef, 'mini_config--open');

  const onSumitForm = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const textarea = document.querySelector('.chat_suport_send_message textarea');
    // textarea.addEventListener('input', autoResize, false);

    function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }

    const element = chatRef.current;
    element.scrollTop = element.scrollHeight;
  }, [])

  const noSelectedDay = "darken-on-hover after:bg-[rgba(156_163_175/_0.4)] w-1/3 bg-[rgba(156_163_175/_0.35)] border-[rgba(156_163_175/_0.3)] border-b-2 border-b-gray-700 rounded-none text-slate-950"
  const selectedDay = "darken-on-hover after:bg-[rgba(147_197_253/_0.4)] w-1/3 bg-[rgba(147_197_253/_0.3)] border-[rgba(147_197_253/_0.3)] border-b-2 border-b-blue-700 rounded-none text-slate-950"
  const receitaSelected = "darken-on-hover after:bg-[rgba(134_239_172/_0.4)] w-1/2 bg-[rgba(134_239_172/_0.3)] border-[rgba(134_239_172/_0.3)]"

  const optionsBank = [
    { value: 'inter', label: 'Inter' },
    { value: 'nubank', label: 'Nubank' },
  ]

  const optionsTag = [
    { value: 'education', label: 'Educaçao' },
    { value: 'car', label: 'Carro' },
    { value: 'house', label: 'Casa' },
  ]

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (

    <section ref={menuRef} className="chat-suport finance-modal modal overflow-x-hidden border border-solid border-slate-200">

      <div className="chat_suport_header sticky top-0 flex justify-between items-center px-6">

        <h2>Novo Registro</h2>

      </div>

      {/* simples divs para simular notificao em linha */}

      {/*chat_suport_container*/}

      <div ref={chatRef}>
        <form className="w-full px-4">
          <label htmlFor="valor" className="w-full">
            <input
                id="valor" type="text" className="text-2xl font-medium" value="R$ 0,00" placeholder="R$ 0,00"/>

          </label>

          <div className="w-full gap-1 hover:border-[#141996] pb-1 mt-6 flex ">
            <button
                className="darken-on-hover after:bg-[rgba(252_165_165/_0.4)] w-1/2 bg-[rgba(252_165_165/_0.3)] border-[rgba(252_165_165/_0.3)] border-b-2 border-b-red-700 rounded-none text-slate-950">
              Despesa
            </button>
            <button
                className="darken-on-hover after:bg-[rgba(134_239_172/_0.5)] w-1/2 bg-[rgba(156_163_175/_0.3)] border-[rgba(156_163_175/_0.3)] border-b-2 border-b-gray-700 rounded-none text-slate-950">
              Receita
            </button>
          </div>

          <section className="w-full gap-1 hover:border-[#141996] pb-1 mt-6 flex ">

            <div className="w-full gap-1 flex justify-between items-center px-6">
              <p>Foi pago</p>
              <Switch {...label} defaultChecked color="error" />
            </div>

          </section>

          <div className="w-full gap-1 border-b border-[#444CE6] hover:border-[#141996] pb-1 mt-6 flex ">
            <button
                className={selectedDay}>
              Hoje
            </button>
            <button
                className={noSelectedDay}>
              Ontem
            </button>

            <button
                className={noSelectedDay}>
              Outro dia
            </button>
          </div>

          <label htmlFor="description" className="w-full mt-6">
            <input id="description" type="text" className="font-medium" placeholder="Descrição"/>

          </label>

          <Select options={optionsBank} placeholder="Escolha um banco" className="w-full text-left mt-6"/>

          <Select options={optionsTag} placeholder="Escolha uma Tag" styles="border: none; "
                  className="w-full text-left mt-6 rounded-none "/>

          <div className="w-full gap-1 pb-6 mt-6 flex justify-center ">
            <button
                className="w-1/2 bg-[rgba(147_197_253/_0.8)] border-[rgba(147_197_253/_0.3)] border-b-2 border-b-blue-700 rounded-none text-slate-950">
              Salvar
            </button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default ChatSuport;