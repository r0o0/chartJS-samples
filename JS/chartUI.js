(function () {
  // chart default font styles
  Chart.defaults.global.defaultFontSize = 16;

  // polar chart
  function polarChart() {
    var ctx = document.getElementById('polarChart');

    var polarChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['area1', 'area2', 'area3', 'area4', 'area5', 'area6', 'area7'],
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#34495e'
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'left',
          labels: {
            boxWidth: 20,
            padding: 10
          }
        },
        layout: {
          padding: {
            top: 50
          }
        }
      }
    });
  }

  // bar 차트
  function barChart() {
    var ctx = document.getElementById('barChart');

    var barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels : [
          'area1',
          'area2',
          'area3',
          'area4',
          'area5',
          'area6',
          'area7'
        ],
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#34495e'
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      },
      options: {
        legend: false,
        layout: {
          padding: {
            top: 50
          }
        }
      }
    });
  }

  function radarChart() {
    var ctx = document.getElementById("radarChart");

    var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['test1', 'test2', 'test3', 'test4', 'test5'],
        datasets: [{
          label: 'radar chart',
          backgroundColor: "rgba(153,255,51,0.4)",
          borderColor: "rgba(153,255,51,1)",
          data: [4, 5, 4, 4, 4]
        }]
      },
      options: {
        legend: false,
        scale: {
          // data label number
          ticks: {
            min: 0,
            max: 6,
            display: false, // data label display off
          },
          pointLabels: {
            fontSize: 16,
            padding: 10
          }
        }
      }
    });
  }

  polarChart();
  barChart();
  radarChart();
})();