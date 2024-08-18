'use client';

import {useEffect, useRef, useState, use} from 'react';
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
import {useForm} from "react-hook-form";
import Calendar from "@/app/components/modal/Calendar";
import Message from "@/app/components/message";
import {removeMessageImmediately} from "@/app/utils/removeMessage";
import {notificationMessage} from "@/app/utils/notificationMessage";
import FecthAPI from "@/app/service/FecthAPI";


function ChatSuport({ menuRef, openCalendar }) {
  const calendarRef = useRef(null);
  const miniCofingLeftRef = useRef(null);
  const miniCofingRightRef = useRef(null);
  const miniCofingAttachmentRef = useRef(null);
  const chatRef = useRef(null);
  const [mostrarMensagem, setMostrarMensagem] = useState([]);
  const [message, setMessage] = useState({});
  const showRef = useRef(0);
  const [timeouts, setTimeouts] = useState({});

  const date = new Date()
  date.setDate(date.getDate() - 1)

  const [registerType, setRegisterType] = useState({
    registro_efetivado: true,
    quando_ocorreu: date.toISOString(),
    tipo_registro: 'expense',
    value: '',
    description: '',
    banco: '',
    tag: ''
  });

  useEffect(() => {

    console.log(message)
    if (!Object.keys(message).length) return;

    for (const msg in message) {
      showRef.current += message[msg].show; // Update the value of 'show' using the useRef hook
      if (showRef.current > 1) {
        return removeMessageImmediately(msg.id, setMostrarMensagem);
      }
    }

    if (showRef.current > 1) return removeMessageImmediately(message.id, setMostrarMensagem);

    notificationMessage(setMostrarMensagem, setTimeouts, message);
  }, [message]);

  const { register, watch, setValue, reset } = useForm()

  const valorDoRegistro = watch('value');

    useEffect(() => {
        const handleClickOutside = (event) => {
            // const menu = menuRef.current;
            const calendar = calendarRef.current

            let element = event.target;

            while (element) {
                if (element.classList.contains('menu-item')) {
                    return
                }

                element = element.parentElement;
            }

            if (calendar && !calendar.contains(event.target) && !event.target.classList.contains('simple-menu--open')) {
                calendar.classList.remove('simple-menu--open');
            }

        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!valorDoRegistro)
            return
        const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency
            }).format(valor)
        }

        const mascaraMoeda = () => {
            const onlyDigits = valorDoRegistro
                .split("")
                .filter(s => /\d/.test(s))
                .join("")
                .padStart(3, "0")
            const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
            const v = maskCurrency(digitsFloat)

            setValue('value', v)
        }

        mascaraMoeda()

    }, [valorDoRegistro, setValue]);

  useEffect(() => {
    let f = ''
    const subscription = watch((value, { name, type }) =>{
        // f = parseFloat(value.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      console.log(value.value)
        const onlyDigits = value.value.split('')
            .filter(s => /\d/.test(s))
            .join('')

        const finalValue = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)

        setRegisterType({
          ...registerType,
          ...value,
            value: parseFloat(finalValue)
        })
    })
  }, [registerType, setValue, watch])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registerType.tipo_registro) {
      setMessage({
        text: 'Voce deve escolher entre receita ou despesa!',
        id: Date.now(),
        bg: '#ff0000',
        show: 1,
      })

      return
    }

    if (!registerType.value || registerType.value === '.') {
      setMessage({
        text: 'Escolha um valor!',
        id: Date.now(),
        bg: '#ff0000',
        show: 1,
      })

      return
    }

    if (!registerType.description) {
      setMessage({
        text: 'A descricao e obrigatoria!',
        id: Date.now(),
        bg: '#ff0000',
        show: 1,
      })

      return
    }

    if (registerType.tipo_registro === 'expense'){

      const result = await FecthAPI.saveExpense(registerType)

      const message = result.message === 'expense created' ? 'Despesa cadastrada com sucesso' : result.message

      if (result.message === 'expense created') {
        reset()
        setMessage({
          id: Date.now(),
          text: message,
          bg: '#3faa76',
          show: 1,
        })
        return
      }

      setMessage({
        id: Date.now(),
        text: message,
        bg: '#aa3f46',
        show: 1,
      })

    } else if (registerType.tipo_registro === 'remuneration'){

      const result = await FecthAPI.saveRemuneration(registerType)

      const message = result.message === 'remuneration created' ? 'Receita cadastrada com sucesso' : result.message

      if (result.message === 'remuneration created') {
        reset()
        setMessage({
          id: Date.now(),
          text: message,
          bg: '#3faa76',
          show: 1,
        })
        return
      }

      setMessage({
        id: Date.now(),
        text: message,
        bg: '#aa3f46',
        show: 1,
      })

    }

    // fazer validacao dos dados
    // enviar para o backend com base no tipo_registro
    // if()


  }

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
    <>
      <section ref={menuRef}
               className="chat-suport finance-modal modal overflow-x-hidden border border-solid border-slate-200">

        <div className="chat_suport_header sticky top-0 flex justify-between items-center px-6">

          <h2>Novo Registro</h2>

        </div>

        {/* simples divs para simular notificao em linha */}

        {/*chat_suport_container*/}

        <div ref={chatRef}>
          <form className="w-full px-4" onSubmit={handleSubmit}>
            <label htmlFor="valor" className="w-full">
              <input
                id="valor" type="text" {...register('value')} style={{backgroundColor: 'transparent'}}
                className="text-2xl font-medium" placeholder="R$ 0,00"/>

            </label>

            <div className="w-full gap-1 hover:border-[#141996] pb-1 mt-6 flex ">
              <button
                className="darken-on-hover after:bg-[rgba(252_165_165/_0.4)] w-1/2 bg-[rgba(252_165_165/_0.3)] border-[rgba(252_165_165/_0.3)] border-b-2 border-b-red-700 rounded-none text-slate-950"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('tipo_registro').innerText = 'Foi pago';

                  setRegisterType({
                    ...registerType,
                    tipo_registro: 'expense'
                  })
                }}
              >
                Despesa
              </button>
              <button
                className="darken-on-hover after:bg-[rgba(134_239_172/_0.5)] w-1/2 bg-[rgba(156_163_175/_0.3)] border-[rgba(156_163_175/_0.3)] border-b-2 border-b-gray-700 rounded-none text-slate-950"
                onClick={(e) => {
                  e.preventDefault()
                  // console.log(e.currentTarget.classList);

                  e.currentTarget.classList.add(
                    'darken-on-hover',
                    'after:bg-[rgba(134_239_172/_0.4)]',
                    'bg-[rgba(134_239_172/_0.3)]',
                    'border-[rgba(134_239_172/_0.3)]',
                    'border-b-green-700'
                  );
                  document.getElementById('tipo_registro').innerText = 'Foi recebido';

                  setRegisterType({
                    ...registerType,
                    tipo_registro: 'remuneration'
                  })
                }}
              >
                Receita
              </button>
            </div>

            <section className="w-full gap-1 hover:border-[#141996] pb-1 mt-6 flex ">

              <div className="w-full gap-1 flex justify-between items-center px-6">
                <p id="tipo_registro">Foi pago</p>
                {
                  registerType?.tipo_registro === 'remuneration' ? (
                    <Switch {...label} defaultChecked onChange={(e) => {
                      setRegisterType({
                        ...registerType,
                        registro_efetivado: e.target.checked
                      })
                    }} color="success"/>
                  ) : <Switch {...label} defaultChecked onChange={(e) => {
                    setRegisterType({
                      ...registerType,
                      registro_efetivado: e.target.checked
                    })
                  }} color="error"/>
                }
              </div>

            </section>

            <div className="w-full gap-1 border-b border-[#444CE6] hover:border-[#141996] pb-1 mt-6 flex ">
              <button
                className={selectedDay}
                onClick={(e) => {
                  e.preventDefault()

                  const date = new Date()
                  date.setDate(date.getDate() - 1)

                  setRegisterType({
                    ...registerType,
                    quando_ocorreu: date.toISOString()
                  })
                }}
              >
                Hoje
              </button>
              <button
                className={noSelectedDay}
                onClick={(e) => {
                  e.preventDefault()

                  const date = new Date()
                  date.setDate(date.getDate() - 2)

                  setRegisterType({
                    ...registerType,
                    quando_ocorreu: date.toISOString()
                  })
                }}>
                Ontem
              </button>

              <button
                className={noSelectedDay}
                onClick={(e) => {
                  e.preventDefault()
                  // toggleCalendarModal(e)

                  // precisa chamar uma funcao assincrona puxando um modal com full calendar, para que o user escolha a data que ele quiser

                  setRegisterType({
                    ...registerType,
                    quando_ocorreu: '2024-04-12'
                  })
                }}>
                Outro dia
              </button>
            </div>

            <label htmlFor="description" className="w-full mt-6">
              <input id="description" {...register('description')} type="text" className="font-medium"
                     placeholder="Descrição"/>

            </label>

            <Select
              options={optionsBank}

              onChange={(e) => {
                setRegisterType({
                  ...registerType,
                  banco: e.value
                })
              }}

              placeholder="Escolha um banco" className="w-full text-left mt-6"/>

            <Select options={optionsTag} placeholder="Escolha uma Tag" styles="border: none; "
                    onChange={(e) => {
                      setRegisterType({
                        ...registerType,
                        tag: e.value
                      })
                    }}
                    className="w-full text-left mt-6 rounded-none "/>

            <div className="w-full gap-1 pb-6 mt-6 flex justify-center ">
              <button type={"submit"}
                      className="w-1/2 bg-[rgba(147_197_253/_0.8)] border-[rgba(147_197_253/_0.3)] border-b-2 border-b-blue-700 rounded-none text-slate-950">
                Salvar
              </button>
            </div>
          </form>
        </div>

      </section>

      <div className="message-container">
        {mostrarMensagem.map((message) => (
          <Message
            key={message.id}
            message={message.text}
            setMostrarMensagem={setMostrarMensagem}
            timeouts={timeouts}
            id={message.id}
            backgroundColor={message.bg}
          />
        ))}
      </div>
    </>
  )
}

export default ChatSuport;