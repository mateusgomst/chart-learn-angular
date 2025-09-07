import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js'; // Não precisa mais de ChartType aqui
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico-pizza',
  imports: [BaseChartDirective],
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.scss']
})
export class GraficoPizzaComponent {

  public pieChartLabels: string[] = ['Marketing', 'Vendas', 'Suporte Técnico', 'Desenvolvimento'];
  public data: number[] = [300, 500, 180, 420];

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.pieChartLabels,
    datasets: [{
      data: this.data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBorderColor: '#fff'
    }]
  };

  public pieChartType: 'pie' = 'pie';

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
}