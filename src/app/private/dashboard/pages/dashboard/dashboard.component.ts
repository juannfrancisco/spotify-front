import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  chart1: any;
  chart2: any;
  chart3: any;

  ngOnInit() {
    this.chart1 = {
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Premium',
            data: [50, 80, 60, 120, 80, 100, 60],
            backgroundColor: 'transparent',
            borderColor: '#5b6582',
            borderWidth: 2,
            lineTension: 0.5,
          },
          {
            label: 'Free',
            data: [100, 60, 80, 50, 140, 60, 100],
            backgroundColor: 'transparent',
            borderColor: '#36a2eb',
            borderWidth: 2,
            lineTension: 0.5,
          },
        ],
      },
      options: {
        scales: {
          yAxes: {
            ticks: {
              fontColor: 'rgba(0,0,0,.6)',
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
          },
        },
        responsive: true,
        plugins: {
          position: 'bottom',
          legend: {
            display: false,
            // labels: {
            //     color: 'rgb(255, 99, 132)'
            // }
          },
        },
      },
    };
    this.chart2 = {
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Premium',
            data: [50, 80, 60, 120, 80, 100, 60],
            backgroundColor: '#5b6582',
            borderColor: '#5b6582',
            borderWidth: 2,
            barPercentage: 0.5,
          },
          {
            label: 'Free',
            data: [100, 60, 80, 50, 140, 60, 100],
            backgroundColor: '#36a2eb',
            borderColor: '#36a2eb',
            borderWidth: 2,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        scales: {
          yAxes: {
            ticks: {
              fontColor: 'rgba(0,0,0,.6)',
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
          },
        },
        barValueSpacing: 1,
        esponsive: true,
        plugins: {
          position: 'bottom',
          legend: {
            display: false,
            // labels: {
            //     color: 'rgb(255, 99, 132)'
            // }
          },
          cutoutPercentage: 80,
        },
      },
    };
    this.chart3 = {
      data: {
        datasets: [
          {
            data: [6, 12, 10],
            backgroundColor: ['#5b6582', '#98a4c7', '#36a2eb'],
          },
        ],
        labels: ['html', 'css', 'javascript'],
      },
      options: {
        responsive: false,
        aspectRatio: 1,
        cutout: 120,
        plugins: {
          position: 'bottom',
          legend: {
            display: false,
            // labels: {
            //     color: 'rgb(255, 99, 132)'
            // }
          },
        },
      },
    };
  }

  ngAfterViewInit(): void {
    new Chart('chart-line', {
      type: 'line',
      data: this.chart1.data,
      options: this.chart1.options,
    });
    new Chart('chart-bar', {
      type: 'bar',
      data: this.chart2.data,
      options: this.chart2.options,
    });
    new Chart('chart-doughnut', {
      type: 'doughnut',
      data: this.chart3.data,
      options: this.chart3.options,
    });
  }
}
