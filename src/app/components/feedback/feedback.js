import { useEffect } from 'react';
import './style.css'

function Feedback() {

  useEffect(() => {
    document.querySelectorAll('.inline_feedback p')

    .forEach((p) => {
      let text = p.innerText;
      text = text.length > 26 ? text.slice(0, 27) + '...' : text;
      p.innerText = text;
    })
  })

  return (
    <div className="w-full">
      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-red-100">
        <div>
          <h1>Pag. Faculdade </h1>
          <small>08:17 - 02/08/2024 </small>
        </div>

        <div>
          <p>R$ 310,00</p>
          <small>Despesa</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-red-100">
        <div>
          <h1>Parcela Notebook</h1>
          <small>13:41 - 05/08/2024 </small>
        </div>

        <div>
          <p>R$ 250,40</p>
          <small>Despesa</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-red-100">
        <div>
          <h1>NetFlix</h1>
          <small>14:30 - 09/08/2024 </small>
        </div>

        <div>
          <p>R$ 59,90</p>
          <small>Despesa</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-green-100">
        <div>
          <h1>Recebimento Salário</h1>
          <small>16:03 - 10/08/2024 </small>
        </div>

        <div>
          <p>R$ 2.100,00</p>
          <small>Salário</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-red-100">
        <div>
          <h1>Pizza</h1>
          <small>21:07 - 12/08/2024 </small>
        </div>

        <div>
          <p>R$ 70,00</p>
          <small>Despesa</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-green-100">
        <div>
          <h1>Pag. Job Freelancer </h1>
          <small>12:37 - 15/08/2024 </small>
        </div>

        <div>
          <p>R$ 938,00</p>
          <small>Salário</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-red-100">
        <div>
          <h1>Manuten. Bike</h1>
          <small>14:30 - 16/08/2024 </small>
        </div>

        <div>
          <p>R$ 464,00</p>
          <small>Despesa</small>
        </div>
      </div>

      <div className="inline_feedback cursor-pointer w-full flex justify-between bg-amber-100">
        <div>
          <h1>Fatura Nubank</h1>
          <small>20:36 - 17/08/2024</small>
        </div>

        <div>
          <p>R$ 657,02</p>
          <small>Fatura</small>
        </div>
      </div>

    </div>
  );
}

export default Feedback;