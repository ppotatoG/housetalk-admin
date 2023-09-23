import { ChartOptions } from 'chart.js';

export const DOUGHNUT_CHART_OPTIONS: ChartOptions<'doughnut'> = {
  responsive: true,
  cutout: '40%',
  plugins: {
    legend: {
      display: false,
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
      ticks: {
        display: false,
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
