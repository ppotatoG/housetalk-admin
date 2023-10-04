import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface ChartProps {
  chartData: ChartData<'doughnut'>;
  options: ChartOptions<'doughnut'>;
}

const Chart: React.FC<ChartProps> = ({ chartData, options }) => {
  return (
    <Doughnut
      data={chartData}
      options={options}
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

            const maleIndex = genderLabels.indexOf('male');
            const femaleIndex = genderLabels.indexOf('female');
            const maleValue = genderData[maleIndex] || 0;
            const femaleValue = genderData[femaleIndex] || 0;

            const total = maleValue + femaleValue;
            const malePercentage = Math.round((maleValue / total) * 100);
            const femalePercentage = Math.round((femaleValue / total) * 100);

            const displayText =
              malePercentage > femalePercentage
                ? `남 ${malePercentage}%`
                : `여 ${femalePercentage}%`;

            ctx.fillText(displayText, chart.width / 2, chart.height / 2);
          },
        },
      ]}
    />
  );
};

export default Chart;
