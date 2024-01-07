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
      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Maria Silva </h1>
          <small>14:30 - 2023/05/10 </small>
        </div>

        <div>
          <p>Incrível experiência, mudou minha vida!</p>
          <small>Nota - 5</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>João Pereira </h1>
          <small>09:45 - 2023/07/22</small>
        </div>

        <div>
          <p>Superou minhas expectativas, recomendo!</p>
          <small>Nota - 4</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Ana Santos</h1>
          <small>17:15 - 2023/09/18</small>
        </div>

        <div>
          <p>Transformador, nunca vi nada igual!</p>
          <small>Nota - 3</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Ricardo Oliveira</h1>
          <small>11:20 - 2023/11/05</small>
        </div>

        <div>
          <p>Surpreendente, vale cada segundo!</p>
          <small>Nota - 4</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Juliana Lima</h1>
          <small>20:05 - 2024/01/12</small>
        </div>

        <div>
          <p>Inesquecível, quero repetir sempre!</p>
          <small>Nota - 5</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Fernando Costa</h1>
          <small>15:40 - 2023/08/08</small>
        </div>

        <div>
          <p>Excelente, me deixou sem palavras!</p>
          <small>Nota - 4</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Carla Mendes</h1>
          <small>13:55 - 2023/06/30</small>
        </div>

        <div>
          <p>Sensacional, recomendo a todos!</p>
          <small>Nota - 5</small>
        </div>
      </div>

      <div className="inline_feedback w-full flex justify-between">
        <div>
          <h1>Gabriel Santos</h1>
          <small>17:01 07/01/2024</small>
        </div>

        <div class="">
          <p>Incrivelmente bom, surpreendente!</p>
          <small>Nota - 5</small>
        </div>
      </div>

    </div>
  );
}

export default Feedback;