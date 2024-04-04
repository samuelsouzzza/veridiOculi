'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export const data = {
  labels: ['Embaúba'],
  datasets: [
    {
      label: 'Percemtual de acuracidade',
      data: [12, 1],
      backgroundColor: ['#39a60066', 'transparent'],
      borderColor: ['#39a600', 'transparent'],
      borderWidth: 1,
    },
  ],
};

const AccuracyGraph = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return <Doughnut data={data} />;
};

export default AccuracyGraph;
