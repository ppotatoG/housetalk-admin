import React from 'react';
import Chart from './Chart';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

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

interface SignUpContentsProps {
  data: DUMMY_SIGNUP_CONTENTS_TYPE[];
  today: string;
}

const SignUpContents: React.FC<SignUpContentsProps> = ({ data, today }) => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    events: [],
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const filteredData = data.slice(0, 6).reverse();
  const labels = filteredData.map(item =>
    item.date.slice(-5).replace(/-/g, '.')
  );
  const dailyCounts = filteredData.map(item => item.daily);

  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        data: dailyCounts,
        backgroundColor: filteredData.map(item =>
          today === item.date.replace(/-/g, '.') ? '#066ADF' : '#DBDBDB'
        ),
        barThickness: 15,
      },
    ],
  };

  return (
    <div className="relative w-3/5">
      <h1 className="text-black text-base	font-semibold mb-2">가입 수</h1>
      <div className="flex gap-2 items-center rounded-lg border border-gray-300 bg-white py-4">
        <div>
          <Chart chartData={chartData} options={options} />
        </div>
        <p className="flex text-gray text-xs w-2/5">
          누적 가입 수
          <span className="text-blue-500">
            {filteredData[filteredData.length - 1].date}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpContents;
