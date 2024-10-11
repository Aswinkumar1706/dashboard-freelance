import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      BarChart();
      LineChart();
  });
  
  
  function BarChart()
  {
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["#85ce36", "#85ce36","#85ce36","#85ce36","#85ce36"];
  
  new Chart("BarChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "World Wine Production"
      }
    }
  });
  }
  
  
  function LineChart()
  {
      const xValues = [50,60,70,80,90,100,110,120,130,140,150];
  const yValues = [7,8,8,9,9,9,10,11,14,14,15];
  
  new Chart("LineChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "#85ce36",
        borderColor: "#85ce36",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });
  }
  }

}
