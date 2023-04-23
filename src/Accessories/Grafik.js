import Highcharts from 'highcharts';

export const createChart = (xvalue,yValue1, yValue2, yValue3) => {
  const options = { 
    chart: {
      type: 'line'
    },
    title: {
      text: 'Google Mobility - Philipines 2020'
    },
    xAxis: [{
      categories: xvalue,
      labels: {
        style: {
            fontSize:'15px'
        }
    }
    }],
    yAxis: [{
      title: {
        text: 'Procentualno izražena promena'
      },
      labels: {
        style: {
            fontSize:'15px'
        }
    }
    }],
    series: [{
      name: 'Parkovi',
      data: yValue1,
      color: 'red'
    }, 
    {
      name: 'Posao',
      data: yValue2},
      {
      name: 'Dom',
      data: yValue3,
      xAxis: 0,
      yAxis: 0
    }]
  };
  Highcharts.chart('myChart', options);
};
