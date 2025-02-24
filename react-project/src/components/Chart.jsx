import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Яблоки',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Продукты',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    },
  });

  return (
    <div>
      <div id="chart" className="w-[350px] h-[200px]">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
