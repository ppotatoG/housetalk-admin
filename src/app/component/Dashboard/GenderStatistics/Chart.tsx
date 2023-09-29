import { ChartData, ChartConfiguration } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface ChartProps {
  chartData: ChartData<'doughnut'>;
  options: ChartConfiguration['options'];
}

const Chart: React.FC<ChartProps> = ({ chartData, options }) => {
  return (
    <Doughnut
      data={chartData}
      options={options as ChartConfiguration['options']}
      plugins={[
        {
          id: 'genderStatistics',
          afterDraw: chart => {
            const ctx = chart.ctx;
            if (!ctx) return;

            ctx.font = '12px';
            ctx.textAlign = 'center';

            const genderLabels = chart.data.labels as string[];
            const genderData = chart.data.datasets?.[0]?.data as number[];

            const maleIndex = genderLabels.indexOf('Male');
            const femaleIndex = genderLabels.indexOf('Female');
            const maleValue = genderData[maleIndex] || 0;
            const femaleValue = genderData[femaleIndex] || 0;

            const total = maleValue + femaleValue;
            const malePercentage = Math.round((maleValue / total) * 100);
            const femalePercentage = Math.round((femaleValue / total) * 100);

            let displayText = '';
            if (malePercentage > femalePercentage) {
              displayText = `남 ${malePercentage}%`;
            } else {
              displayText = `여 ${femalePercentage}%`;
            }

            ctx.fillText(displayText, chart.width / 2, chart.height / 2);
          },
        },
      ]}
    />
  );
};

export default Chart;
