import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement)

function CardChart({ title, className, id, content, component }) {
  return (
    <div className={className} id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div style={{ width: '100%', height: '400px' }}>
        {/* <Line data={data} responsive={true} options={{ maintainAspectRatio: false }} /> */}
        {component}
      </div>
    </div>
  );
}

export default CardChart;