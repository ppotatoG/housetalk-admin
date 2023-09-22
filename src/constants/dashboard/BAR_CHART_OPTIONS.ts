import { ChartOptions } from 'chart.js';

export const BAR_CHART_OPTIONS: ChartOptions<'bar'> = {
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
