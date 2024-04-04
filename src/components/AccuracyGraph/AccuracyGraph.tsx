'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

interface PieProps {
  options: ChartOptions<'pie'>;
  data: ChartData<'pie'>;
}

export const data = {
  labels: ['Embaúba'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 1],
      backgroundColor: ['rgba(153, 102, 255, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    },
  ],
};

const AccuracyGraph = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return <Doughnut data={data} />;
};

export default AccuracyGraph;
