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

import { faMoneyCheckDollar, faGraduationCap, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { LineChart } from '../components/charts/line';
import { BarChart } from '../components/charts/bar';
import Feedback from '../components/feedback/feedback';
import MenuProfile from '../components/modal/menuProfile';
import NavBar from '../components/modal/navBar';

import FecthAPI from '@/app/service/FecthAPI';

let receitasColor = 'rgba(0,128,0'; // Verde
let despesasColor = 'rgba(255,0,0'; // Vermelho
let lucroColor = 'rgba(68, 76, 230';

export default function Home() {
  const menuRef = useRef(null);
  const menuProfileRef = useRef(null);
  const chatSuportRef = useRef(null);
  const [openModal, setOpenModal] = useState(null);

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


  const toggleNotificationModal = toggleModal(menuRef);
  const toggleChatSuportModal = toggleModal(chatSuportRef)
  const toggleProfileModal = toggleModal(menuProfileRef);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = menuRef.current;
      const menuProfile = menuProfileRef.current;
      const chatSuport = chatSuportRef.current;

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
  
    // Adiciona o ouvinte de eventos ao documento
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      // Remove o ouvinte de eventos ao desmontar
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await FecthAPI.getAllRemunerationByYear();
      try{
        const {receivements, totalReceive} = await FecthAPI.getAllRemunerationByMonth();
        setReceive(totalReceive);
        setReceivements(receivements);
        // setHigherReceipt
      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso

        console.error(error);
        setReceive(0);
      }
    }

    fetchData();

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
    const getAllRemunerationByYear = async () => {
      try{
        // const {receivements, totalReceive} = await FecthAPI.getAllRemunerationByYear();
        const remunerations = await FecthAPI.getAllRemunerationByYear();
        // setReceivementsYearLabels(remunerations.labels)
        // setReceivementsYearData(remunerations.data)

        setReceivementsData(remunerations.receivementsByMonth)
      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso

        console.error(error);
        setComparationYearLabels([])
        setReceivementsYearData([])
      }
    }

    getAllRemunerationByYear();

  }, []);


  useEffect(() => {
    const getAllExpenseByYear = async () => {
      try{
        // const {receivements, totalReceive} = await FecthAPI.getAllExpenseByYear();
        const expense = await FecthAPI.getAllExpenseByYear();
        // setExpensesYearLabels(Expense.labels)
        // setExpensesYearData(expense.data)
        setExpensesData(expense.expenseByMonth)

      } catch (error) {

        // preciso falaar paraa o usuario que deu erro, ja tenho componente para isso

        console.error(error);
        // setExpensesYearLabels([])
        setComparationYearLabels([])
        setExpensesYearData([])
      }
    }

    getAllExpenseByYear();

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

  const financial = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Receitas',
        backgroundColor: receitasColor + ', 0.6)',
        borderColor: receitasColor + ', 0.4)',
        data: [5, 6, 3, 7, 7, 3, 8],
        tension: 0.09
      },
      {
        label: 'Despesas',
        backgroundColor: despesasColor + ', 0)',
        borderColor: despesasColor + ', 0.8)',
        data: [2, -2, 1, 4, 2, 1, 3],
        tension: 0.09
      },
      {
        label: 'Lucro',
        backgroundColor: lucroColor + ', 0.6)',
        borderColor: lucroColor + ',0.8)',
        data: [3, 4, 2, 3, 5, 2, 5],
        tension: 0.09
      }
    ]
  };

  return (
    <>
      {<Header onToggle={{
        toggleNotificationModal, toggleProfileModal, toggleChatSuportModal
      }} />}
      {<Nofity menuRef={menuRef} />}
      {<MenuProfile menuRef={menuProfileRef} />}
      {<ChatSuport menuRef={chatSuportRef} />}
      {<NavBar />}

    
      <main  className="min-h-screen w-screen justify-between p-24 card-container">
        <section className="container-minimal_card flex justify-between">
          <Card
            title="Recebimentos do Mês"
            className="minimal-card dashboard-card transition-card receivement-card" 
            icon={{icon: faMoneyCheckDollar, className: 'green-color'}} 
            id="div1" 
            content={`R$ ${receive}`} />

          <Card
            title="Saldo" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faGraduationCap,
              className: 'primary-color '
            }} 
            id="div1" 
            content={`R$ ${balanceMonth}`} />

          <Card
            title="Despesas do Mês" 
            className="minimal-card transition-card dashboard-card training-card" 
            icon={{
              icon: faHeartCircleCheck,
              className: 'tertiary-color'
            }} 
            id="div1" 
            content={`R$ ${expenseMonth}`} />

          <Card
            title="Faturas" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faGraduationCap,
              className: 'primary-color '
            }} 
            id="div1" 
            content="$R 3.529,04" />

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
            icon={faGoogle} id="div1"
            content="This is Card 1" />
        </section>
      </main>
    </>

  );
}

function labels () {
  
}
