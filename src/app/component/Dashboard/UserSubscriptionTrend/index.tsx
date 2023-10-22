import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';

import { CHART_COLORS, BAR_CHART_OPTIONS, DASHBOARD_TITLES } from '@/constants';

import Chart from './Chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface UserSubscriptionTrendProps {
  data: DUMMY_SIGNUP_CONTENTS_TYPE[];
  today: string;
}

const UserSubscriptionTrend: React.FC<UserSubscriptionTrendProps> = ({
  data,
  today,
}) => {
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
          today === item.date.replace(/-/g, '.')
            ? CHART_COLORS.light.accent
            : CHART_COLORS.light.primary
        ),
        barThickness: 15,
      },
    ],
  };

  return (
    <div className="relative flex-grow">
      <h1 className="text-black text-base font-semibold mb-2">
        {DASHBOARD_TITLES.USER_SUBSCRIPTION_TREND}
      </h1>
      <div className="flex justify-between items-center rounded-lg border py-4 border-gray-200 dark:border-gray-800">
        <div className="w-4/5">
          <Chart chartData={chartData} options={BAR_CHART_OPTIONS} />
        </div>
        <p className="flex text-gray text-xs w-1/5">
          누적 가입 수
          <span className="text-blue-600 dark:text-blue-400">
            {filteredData[filteredData.length - 1].date}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserSubscriptionTrend;
