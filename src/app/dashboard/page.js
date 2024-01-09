"use client";

import Image from 'next/image'
import { useEffect, useRef } from 'react';
import Card from '../components/dashboard/dashboardCard';
import ChartCard from '../hook/ChartDashboardCard';
import Header from '../components/header/header'
import Nofity from '../components/modal/notify'
import '../globals.css'
import './style.css'
import { dragAndDrop } from '../utils/dragginDrop';

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

let receitasColor = 'rgba(0,128,0'; // Verde
let despesasColor = 'rgba(255,0,0'; // Vermelho
let lucroColor = 'rgba(68, 76, 230';

export default function Home() {
  const menuRef = useRef(null);

  const menuToggle = () => {
    const menu = menuRef.current;
    if (menu.classList.contains('simple-menu--open')) {
      menu.classList.remove('simple-menu--open');
    } else {
      console.log('menuToggle');
      menu.classList.add('simple-menu--open');
    }
  };


  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(68, 76, 230,0.6)',
        borderColor: 'rgba(68, 76, 230,1)',
        data: [5, 8 , 6, 9, 7, 10, 5]
      },
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,50,50,0.6)',
        borderColor: 'rgba(255,50,50,1)',
        data: [2, 6, 2, 7, 6, 3, 3]
      }
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
        data: [2, 2, 1, 4, 2, 1, 3],
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
      {<Header onToggle={menuToggle} />}
      {<Nofity menuRef={menuRef} />}

    
      <main  className="min-h-screen w-screen justify-between p-24 card-container">
        <section className="container-minimal_card flex justify-between">
          <Card
            title="Recebimentos do dia"
            className="minimal-card dashboard-card transition-card receivement-card" 
            icon={{icon: faMoneyCheckDollar, className: 'green-color'}} 
            id="div1" 
            content="R$ 2.075,00" />

          <Card
            title="Total de Alunos" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faGraduationCap,
              className: 'primary-color '
            }} 
            id="div1" 
            content="3.529" />

          <Card
            title="Treinos do dia" 
            className="minimal-card transition-card dashboard-card training-card" 
            icon={{
              icon: faHeartCircleCheck,
              className: 'tertiary-color'
            }} 
            id="div1" 
            content="3.529" />

          <Card
            title="Total de Alunos" 
            className="minimal-card transition-card dashboard-card student-card" 
            icon={{
              icon: faGraduationCap,
              className: 'primary-color '
            }} 
            id="div1" 
            content="3.529" />

        </section>

        <section className="container-medium_card flex justify-between">
          <Card 
            title="Ultimos Feedbacks" 
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
