import { Line, Bar } from 'react-chartjs-2';

export function BarChart({ data }) {
  return <Bar data={data} responsive={true} options={{ maintainAspectRatio: false }} />
}