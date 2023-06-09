import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';

export const createChart = (xValues, seriesData, idchart, opis, yOpis) => {
  HighchartsExporting(Highcharts);

  const contextMenu = {
    items: {
      downloadPNG: {
        text: 'Download PNG',
        onclick: function () {
          this.exportChart();
        }
      },
      downloadJPEG: {
        text: 'Download JPEG',
        onclick: function () {
          this.exportChart({
            type: 'image/jpeg'
          });
        }
      },
      downloadPDF: {
        text: 'Download PDF',
        onclick: function () {
          this.exportChart({
            type: 'application/pdf'
          });
        }
      },
      downloadSVG: {
        text: 'Download SVG',
        onclick: function () {
          this.exportChart({
            type: 'image/svg+xml'
          });
        }
      }
    }
  }

  const options = { 
    chart: {
      type: 'column'
    },
    title: {
      text: opis
    },
    xAxis: [{
      categories: xValues,
      labels: {
        style: {
          fontSize:'10px'
        }
      }
    }],
    yAxis: [{
      title: {
        text: yOpis
      },
      labels: {
        style: {
          fontSize:'10px'
        }
      }
    }],
    plotOptions: {
      column: {
        groupPadding: 0.1,
        pointPadding: 0.01, // Adjust the spacing between columns
        borderWidth: 0
      }
    },
    series: seriesData
  };

  Highcharts.chart(idchart, options);
};
