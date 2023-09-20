import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DUMMY_SIGNUP_CONTENTS_TYPE {
  date: string;
  daily: number;
  cumulative: number;
}

interface SignupChartProps {
  data: DUMMY_SIGNUP_CONTENTS_TYPE[];
  formattedDate: string;
}

const SignUpContents = ({ data, formattedDate }: SignupChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          callback: function (value) {
            return String(value);
          },
        },
      },
      y: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
  };

  const useData = data.slice(0, 6).reverse();
  const labels = useData.map(item => item.date);
  const dailyCounts = useData.map(item => item.daily);

  const chartData = {
    labels,
    datasets: [
      {
        label: undefined, // hide undefined label
        data: dailyCounts,
        backgroundColor: useData.map(item => {
          return formattedDate === item.date.replace(/-/g, '.')
            ? '#066ADF'
            : '#DBDBDB';
        }),
      },
    ],
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1 className="text-black text-lg font-semibold custom-title">
        This is a title
      </h1>

      <div className="rounded-lg border border-gray-300 bg-white">
        <Bar options={options} data={chartData} />
      </div>
      {/*<div*/}
      {/*  style={{ position: 'absolute', right: '50%', top: '10px', zIndex: 1 }}*/}
      {/*>*/}
      {/*  누적 가입 수 |{' '}*/}
      {/*  <span style={{ color: 'blue' }}>*/}
      {/*    {useData[useData.length - 1].date}*/}
      {/*  </span>*/}
      {/*</div>*/}
    </div>
  );
};

export default SignUpContents;
