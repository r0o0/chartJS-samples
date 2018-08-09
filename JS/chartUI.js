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
        labels: [
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
        legendCallback: function (chart) {
          var legend = [];
          var labels = chart.data.datasets[0].data.length;
          var databg = chart.data.datasets[0].backgroundColor;
          if (chart.data.labels) {
            for (var i = 0, l = labels; i < l; i++) {
legend.push('<li class="legend-list"><span class="legend-bg" style="background-color: ' + databg[i] + ' "></span>' + '<span class="legend-text">' + chart.data.labels[i] + '</span>' + '</li>');
            }
          }
          return legend.join('');
        },
        scales: {
          xAxes: [{
            // display: false,
            barThickness: 16,
            gridLines: {
              color: '#eee',
              drawTicks: false
            },
            ticks: {
              padding: 15, // set space between xAxes and chart
              fontColor: '#7e7e7e',

            }
          }],
          yAxes: [{
            gridLines: {
              borderDash: [15],
              drawTicks: false
            },
            ticks: {
              padding: 15, // set space between yAxes and chart
              fontColor: '#7e7e7e'
            }
          }]
        },
        // 툴팁 없애기
        tooltips: {
           enabled: false,
        },
        // 호버 없애기
        events: [],
        // 애니메이션이 끝나면 바에 데이터값 표시
        animation: {
          onComplete: function () {
            var ctx = this.chart.ctx;
            ctx.font = this.scales.font;
            ctx.fillStyle = this.scales.textColor
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            // 바들의 위치 값 참조
            var barData = this.data.datasets[0]._meta[1].data;
            // 바들의 데이터 값 참조
            var value = this.data.datasets[0].data;
    
            barData.forEach(function(dataset, index) {
              var data = value[index];
              var x = dataset._view.x;
              var y = dataset._view.y;
              // 바 데이터 그리기
              ctx.fillText(data, x, y - 15);
            });
          }
        }
      },
    });

    $('.barChart-legend').html(barChart.generateLegend());
  }

  function radarChart() {
    var ctx = document.getElementById("radarChart");

    var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['test1', 'test2', 'test3', 'test4', 'test5'],
        datasets: [{
          label: 'radar chart',
          backgroundColor: "rgba(63,54,65,0.4)",
          borderColor: "rgba(63,54,65,1)",
          data: [4, 5, 4, 4, 4]
        }]
      },
      options: {
        legend: false,
        scale: {
          // horizontal lines
          gridLines: {
            color: '#d7d7d7'
          },
          // vertical lines
          angleLines: {
            color: '#d2d2d2'
          },
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

  // 특정 페이지의 y축에 다다르면 차트 그려줌
  function renderChart() {
    // 차트가 그려졌는지 확인
    var polarRendered = false;
    var barRendered = false;
    var radarRendered = false;
    // 폴라 차트
    var polarY = $('.polar').offset().top;
    var polarHeight = $('.polar').height();
    // 바 차트
    // 엘레멘트의 브라우저의 y 위치 값
    var barY = $('.bar').offset().top;
    // 엘레멘트의 높이 값
    var barHeight = $('.bar').height();
    // 레이다 차트
    var radarY = $('.radar').offset().top;
    var radarHeight = $('.radar').height();

    $(window).scroll(function() {
      var moved = $(this).scrollTop();
      console.log(moved);
      // 폴라 차트가 그려지는 시점
      var polarCon = polarY - (polarHeight);
      // 바 차트가 그려지는 시점
      var barCon = barY - (barHeight);
      // 레이다 차트가 그려지는 시점
      var radarCon = radarY - (radarHeight);

      console.log('polar condition', polarCon);
      console.log('bar condition', barCon);
      console.log('radarCon', radarCon);

      if (moved > polarCon && !polarRendered) {
        polarRendered = true;
        polarChart();
      }
      if (moved > barCon && !barRendered) {
        barRendered = true;
        barChart();
      }
      if (moved > radarCon && !radarRendered) {
        radarRendered = true;
        radarChart();
      }
    });
  };

  renderChart();

})();

