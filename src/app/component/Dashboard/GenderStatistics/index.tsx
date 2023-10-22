import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  ArcElement,
} from 'chart.js';
import React from 'react';

import {
  CHART_COLORS,
  DASHBOARD_TITLES,
  DOUGHNUT_CHART_OPTIONS,
} from '@/constants';

import Chart from './Chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface GenderStatisticsProps {
  data: DUMMY_GENDER_COUNTS_TYPE[];
}

const GenderStatistics: React.FC<GenderStatisticsProps> = ({ data }) => {
  const labels = ['female', 'male'];
  const genders = data.map(item => item.gender);

  const chartData: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data: data.map(v => v.count),
        backgroundColor: genders.map(gender =>
          gender === 'female'
            ? CHART_COLORS.light.female
            : CHART_COLORS.light.male
        ),
      },
    ],
  };

  return (
    <div className="w-1/3 h-full">
      <h1 className="text-black text-base font-semibold mb-2">
        {DASHBOARD_TITLES.USER_GENDER_STATISTICS}
      </h1>
      <div className="p-6 h-full rounded-lg border border-gray-200 dark:border-gray-800">
        <Chart chartData={chartData} options={DOUGHNUT_CHART_OPTIONS} />
      </div>
    </div>
  );
};

export default GenderStatistics;
