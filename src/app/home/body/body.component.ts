import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AuthService } from 'src/app/shared/services/auth.service';

// import 'chartjs-plugin-datalabels';

Chart.register(...registerables);


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(
    public authService: AuthService
    ) 
    { }
  ngOnInit(): void {
    // this.renderLineChart()
   
  }
  // renderLineChart() {
  //   const linechart = document.getElementById('lineChart') as HTMLCanvasElement;
  //   new Chart(linechart, {
  //     type: 'line',
  //     data: {
  //       labels: [],
  //       datasets: [
  //         {
  //           label: 'Budget',
  //           data: ['', '', '',],
  //           backgroundColor: 'rgba(252, 165, 66, 0.2)',
  //           borderColor: 'rgba(255, 165, 66, 1)',
  //           tension: 0.4,
  //           borderWidth: 3,
  //         },
  //       ]
  //     },
  //     options: {
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //       layout: {
  //         padding: {
  //           left: 30,
  //           right: 50,
  //         },
  //       },
  //       aspectRatio: 1.7,
  //       scales: {
  //         x: {
  //           grid: {
  //             display: false, // Disable x-axis grid lines
  //           },
  //         },
  //         y: {
  //           beginAtZero: true,
  //           grid: {
  //             display: false, // Disable y-axis grid lines
  //           },
  //         },
  //       }
  //     }
  //   });
  // }
  

}
