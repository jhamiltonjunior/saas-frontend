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

import {faMoneyCheckDollar, faGraduationCap, faCreditCard, faHeartCircleCheck, faGear} from '@fortawesome/free-solid-svg-icons'

import { LineChart } from '../components/charts/line';
import { BarChart } from '../components/charts/bar';
import Feedback from '../components/feedback/feedback';
import MenuProfile from '../components/modal/menuProfile';
import NavBar from '../components/modal/navBar';

import FecthAPI from '@/app/service/FecthAPI';
import Message from '../components/message';
import { removeMessageImmediately } from '../utils/removeMessage';
import { notificationMessage } from '../utils/notificationMessage';
import ManageFinance from "@/app/components/modal/ManageFinance";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let receitasColor = 'rgba(0,128,0'; // Verde
let despesasColor = 'rgba(255,0,0'; // Vermelho
let lucroColor = 'rgba(68, 76, 230';

export default function Home() {
  const menuRef = useRef(null);
  const menuProfileRef = useRef(null);
  const chatSuportRef = useRef(null);
  const [openModal, setOpenModal] = useState(null);
  const manageRef = useRef(null);

  const [receive, setReceive] = useState(0);
  const [higherReceipt, setHigherReceipt] = useState(0);
  const [expenseMonth, setExpenseMonth] = useState(0);
  const [balanceMonth, setBalanceMonth] = useState(0);

  const [receivements, setReceivements] = useState([]);
  const [comparationYearLabels, setComparationYearLabels] = useState([]);
  const [expensesYearData, setExpensesYearData] = useState([]);
  const [receivementsYearData, setReceivementsYearData] = useState([]);
  const [receivementsData, setReceivementsData] = useState([]);
  const [expenseData, setExpensesData] = useState([]);
  const [mostrarMensagem, setMostrarMensagem] = useState([]);
  const [timeouts, setTimeouts] = useState({});
  const [message, setMessage] = useState({});
  const showRef = useRef(0); // Create a useRef hook to store the value of 'show'


  const toggleNotificationModal = toggleModal(menuRef);
  const toggleChatSuportModal = toggleModal(chatSuportRef)
  const toggleProfileModal = toggleModal(menuProfileRef);
  const toggleManageRef = toggleModal(manageRef);

  // ver pq exibe a mensaaaagem mais de uma vez 
  // estilizr a mensagem

  let show = 0;
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = menuRef.current;
      const menuProfile = menuProfileRef.current;
      const chatSuport = chatSuportRef.current;
      const manage = toggleManageRef.current;

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

      if (manage && !manage.contains(event.target) && !event.target.classList.contains('simple-menu--open')) {
        manage.classList.remove('simple-menu--open');
      }

    };
  
    // Adiciona o ouvinte de eventos ao documento
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      // Remove o ouvinte de eventos ao desmontar
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // const fetchData =
    //
    // fetchData();

    (async () => {
      await FecthAPI.getAllRemunerationByYear();
      try{
        const {receivements, totalReceive} = await FecthAPI.getAllRemunerationByMonth();
        setReceive(totalReceive);
        setReceivements(receivements);
        // setHigherReceipt
      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso
        setMessage({
          text: 'Erro ao buscar dados.',
          id: Date.now(),
          bg: '#ff0000',
          show: 1,
        })

        console.error(error);
        setReceive(0);
      }
    })()

  }, []);

  useEffect(() => {
    if (receivements.length === 0) return;
    // console.log(receivements);

    receivements.reduce((acc, value) => {
      if (value > acc) {
        setHigherReceipt(value);
        return value;
      }

      return acc;
    }, 0);

  },[receivements]);

  useEffect(() => {
    (async () => {
      try{
        // const {receivements, totalReceive} = await FecthAPI.getAllRemunerationByYear();
        const remunerations = await FecthAPI.getAllRemunerationByYear();
        // setReceivementsYearLabels(remunerations.labels)
        // setReceivementsYearData(remunerations.data)

        setReceivementsData(remunerations.receivementsByMonth)
      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso

        // setMessage({
        //   text: 'Erro ao buscar dados! 2',
        //   id: Date.now(),
        //   bg: '#ff0000',
        //   show: 1,
        // })

        console.error(error);
        setComparationYearLabels([])
        setReceivementsYearData([])
      }
    })()

  }, []);


  useEffect(() => {
    (async () => {
      try{
        // const {receivements, totalReceive} = await FecthAPI.getAllExpenseByYear();
        const expense = await FecthAPI.getAllExpenseByYear();
        // setExpensesYearLabels(Expense.labels)
        // setExpensesYearData(expense.data)
        setExpensesData(expense.expenseByMonth)

      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso

        // setMessage({
        //   text: 'Erro ao buscar dados 3',
        //   id: Date.now(),
        //   bg: '#ff0000',
        //   show: 1,
        // })

        console.error(error);
        // setExpensesYearLabels([])
        setComparationYearLabels([])
        setExpensesYearData([])
      }
    })()

  }, []);

  useEffect(() => {
    const expenseNotPaid = [0];

    for (const receivement in receivementsData) {
      if (!expenseData[receivement]) {
        expenseData[receivement] = 0
      }
    }

    console.log(expenseData)

    for (const expense in expenseData) {
      if (!receivementsData[expense]) {
        receivementsData[expense] = 0
      }



      // if (expenseData[expense].)
    }

    // console.log(receivementsData.sort())

    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]

    const month = new Date().getMonth();

    const expenseMonth = expenseData[months[month]] || 0;
    const receiveMonth = receivementsData[months[month]] || 0;

    const balance = (receiveMonth - expenseMonth).toFixed(2);
    
    setBalanceMonth(String(balance).replace('.', ','))

    setExpenseMonth(String(expenseMonth).replace('.', ','))

    setComparationYearLabels(Object.keys(expenseData).sort((a, b) => {
      return months.indexOf(a) - months.indexOf(b);
    }))
    setExpensesYearData(expenseData)
    setReceivementsYearData(receivementsData)

  }, [receivementsData, expenseData])


  const data = {
    // eu preciso fazer a junção dos meses talvez uma consulta so para facilitaar ou
    //  ver se a biblioteca tem alguma função para isso
    labels: comparationYearLabels,
    datasets: [
      {
        label: 'Recebimentos',
        backgroundColor: 'rgba(68, 76, 230,0.6)',
        borderColor: 'rgba(68, 76, 230,1)',
        data: receivementsYearData
      },
      {
        label: 'Despesas',
        backgroundColor: 'rgba(255,50,50,0.6)',
        borderColor: 'rgba(255,50,50,1)',
        data: expensesYearData
      },
    ]
  };

  const janExpense = 2028.01
  const fevExpense = 500.01
  const marExpense = 1200.01
  const abrExpense = 800.01
  const maioExpense = 1150.00
  const junExpense = 1400.00
  const julExpense = 1028.01
  const agostExpense = 1811.32


  const jan = 2100.00
  const fev = 1350.00
  const mar = 2600.00
  const abr = 2800.00
  const maio = 2400.02
  const jun = 0
  const jul = 0
  const agost = 3038.00

  const saldoJan = jan - janExpense
  const saldoFev = fev + saldoJan - fevExpense
  const saldoMarco = mar + saldoFev - marExpense
  const saldoAbril = abr + saldoMarco - abrExpense
  const saldoMaio = maio + saldoAbril - maioExpense
  const saldoJun = jun + saldoMaio - junExpense
  const saldoJul = jul + saldoJun - julExpense
  const saldoAgosto = agost + saldoJul - agostExpense

  const financial = {

    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
    datasets: [
      {
        label: 'Receitas',
        backgroundColor: receitasColor + ', 0.6)',
        borderColor: receitasColor + ', 0.4)',
        data: [jan, fev, mar, abr, maio, jun, jul, agost],
        tension: 0.09
      },
      {
        label: 'Despesas',
        backgroundColor: despesasColor + ', 0)',
        borderColor: despesasColor + ', 0.8)',
        data: [janExpense, fevExpense, marExpense, abrExpense, maioExpense, junExpense, julExpense, agostExpense],
        tension: 0.09
      },
      {
        label: 'Lucro',
        backgroundColor: lucroColor + ', 0.6)',
        borderColor: lucroColor + ',0.8)',
        data: [saldoJan, saldoFev, saldoMarco, saldoAbril, saldoMaio, saldoJun, saldoJul, saldoAgosto],
        tension: 0.09
      }
    ]
  };

  return (
    <>
      {/*{<Header onToggle={{*/}
      {/*  toggleNotificationModal, toggleProfileModal, toggleChatSuportModal*/}
      {/*}} />}*/}
      {/*{<Nofity menuRef={menuRef} />}*/}
      {/*{<MenuProfile menuRef={menuProfileRef} />}*/}
      {<ChatSuport menuRef={chatSuportRef} />}
      {/*{<NavBar />}*/}


      <button onClick={toggleChatSuportModal} className="fixed right-2 bottom-2 z-50 p-3 py-2 text-lg rounded hover:transform">
        <FontAwesomeIcon className="cursor-pointer" icon={faGear} />
      </button>

      {/*<ManageFinance menuRef={manageRef} />*/}

    
      <main className="min-h-screen w-screen justify-between p-24 pt-4 card-container">
        <section className="container-minimal_card flex justify-between">
          <Card
            title="Recebimentos do Mês"
            className="minimal-card dashboard-card transition-card receivement-card" 
            icon={{icon: faMoneyCheckDollar, className: 'green-color'}} 
            id="div1" 
            content={`R$ 3.038,00`} />

          <Card
            title="Saldo" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faGraduationCap,
              className: 'primary-color '
            }} 
            id="div1" 
            content={`R$ 1.254,67`} />

          <Card
            title="Despesas do Mês" 
            className="minimal-card transition-card dashboard-card training-card" 
            icon={{
              icon: faHeartCircleCheck,
              className: 'tertiary-color'
            }} 
            id="div1" 
            content={`R$ 780,32`} />

          <Card
            title="Faturas" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faCreditCard,
              className: 'primary-color '
            }} 
            id="div1" 
            content="R$ 1.003,01" />

        </section>

        <section className="container-medium_card flex justify-between">
          <Card 
            title="Histórico de Finanças" 
            className="medium_card feedback_card transition-card dashboard-card" 
            chart="cuador" 
            icon={faGoogle} 
            id="div1" 
            content={<Feedback />}
            />

          <ChartCard 
            title="Taxa de Churn" component={<BarChart data={data} />} className="medium_card dashboard-card transition-card" icon={faGoogle} id="div1" content="" />
        </section>
  
        <section className="container-medium_card container-large_card flex justify-between">
          <ChartCard
            title="Financeiro"
            component={<LineChart data={financial} />}
            className="medium_card transition-card dashboard-card"
            icon="" id="div1"
            content="" />
        </section>
      </main>

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

  );
}
