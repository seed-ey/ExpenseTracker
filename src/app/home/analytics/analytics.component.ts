import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  ngOnInit(): void {
    this.renderLineChart()
   
  }
  renderLineChart() {
    const linechart = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(linechart, {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Budget',
            data: [12, 13, 16, 16, 13, 11, 13, 16, 13, 15, 15, 13],
            backgroundColor: 'rgba(252, 165, 66, 0.2)',
            borderColor: '#32DFCE',
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0,
          },
          {
            label: 'Actual',
            data: [13, 15, 15, 12, 12, 15, 15, 12, 14, 13, 15, 15, 13],
            backgroundColor: 'rgba(132, 85, 185, 1)',
            borderColor: '#ff0000',
            tension: 0.5,
            borderWidth: 3,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            left: 70,
            right: 70,
          },
        },
        aspectRatio: 2.1,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (tickValue, index, ticks) {
                return tickValue + '%';
              },
            },
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    });
  }
}
