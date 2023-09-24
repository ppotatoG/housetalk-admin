import React from 'react';
import Chart from './Chart';
import { CHART_COLORS, DOUGHNUT_CHART_OPTIONS } from '@/constants/dashboard';

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
  ChartConfiguration,
} from 'chart.js';

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
  const labels = ['Female', 'Male'];
  const genders = data.map(item => item.gender);

  const chartData: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data: data.map(v => v.count),
        backgroundColor: genders.map(gender =>
          gender === 'Female'
            ? CHART_COLORS.light.female
            : CHART_COLORS.light.male
        ),
      },
    ],
  };

  return (
    <div className="w-1/3 h-full">
      <h1 className="text-black text-base font-semibold mb-2">
        유저 성별 통계
      </h1>
      <div className="p-6 h-full rounded-lg border border-gray-200 dark:border-gray-800">
        <Chart
          chartData={chartData}
          options={DOUGHNUT_CHART_OPTIONS as ChartConfiguration['options']}
        />
      </div>
    </div>
  );
};

export default GenderStatistics;
