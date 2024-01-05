"use client";

import Image from 'next/image'
import { useEffect, useRef } from 'react';
import Card from '../components/dashboard/dashboardCard';
import MinimalCard from '../components/dashboard/minimalDashboardCard';
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

export default function Home() {
  const parentRef = useRef();
  let draggedElem = null;

  useEffect(() => {
    // dragAndDrop(parentRef);

  }, []);

  return (
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
        <Card title="Medium cards" className="medium_card transition-card" icon={faGoogle} id="div1" content="This is Card 1" />
        <Card title="Medium cards" className="medium_card transition-card" icon={faGoogle} id="div1" content="This is Card 1" />
      </section>
 
      <section className="container-medium_card flex justify-between">
        <Card title="Medium cards" className="medium_card transition-card" icon={faGoogle} id="div1" content="This is Card 1" />
      </section>
    </main>
  );
}
