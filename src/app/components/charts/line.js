import { Line, Bar } from 'react-chartjs-2';

export function LineChart({ data }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line data={data} options={options} />
}