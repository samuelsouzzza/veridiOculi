'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './AccuracyGraph.module.css';

type AccuracyGraphProps = {
  accuracy: number;
};

const AccuracyGraph = ({ accuracy }: AccuracyGraphProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        data: [accuracy * 100, 100 - accuracy * 100],
        backgroundColor: ['#39a600cc', 'transparent'],
        borderColor: ['#39a600', 'transparent'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: { tooltip: { enabled: false } },
  };

  return (
    <div className={styles.boxGraph}>
      <Doughnut data={data} options={options} className={styles.graph}/>
      <p>{accuracy * 100}%</p>
    </div>
  );
};

export default AccuracyGraph;
