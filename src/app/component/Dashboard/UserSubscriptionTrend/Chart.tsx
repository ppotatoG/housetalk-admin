import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartProps {
  chartData: ChartData<'bar'>;
  options: ChartOptions<'bar'>;
}

const Chart: React.FC<ChartProps> = ({ chartData, options }) => {
  return (
    <Bar
      data={chartData}
      options={options}
      plugins={[
        {
          id: 'customPlugin',
          afterDraw: chart => {
            const ctx = chart.ctx;
            if (!ctx) return;
            ctx.font = '12px';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            chart.data.datasets?.forEach((dataset, i) => {
              const meta = chart.getDatasetMeta(i);
              meta.data.forEach((bar, index) => {
                const data = dataset.data?.[index];
                if (typeof data === 'number') {
                  ctx.fillText(
                    String(data),
                    (bar as unknown as { x: number }).x,
                    (bar as unknown as { y: number }).y - 5
                  );
                }
              });
            });
          },
        },
      ]}
    />
  );
};

export default Chart;
