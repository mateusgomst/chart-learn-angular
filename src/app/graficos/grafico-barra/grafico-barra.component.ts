import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barra',
  imports: [BaseChartDirective],
  templateUrl: './grafico-barra.component.html',
  styleUrl: './grafico-barra.component.scss'
})

export class GraficoBarraComponent {

  public barChartType: 'bar' = 'bar';

  // 2. OPÇÕES DE CUSTOMIZAÇÃO
  // Gráficos de barra têm eixos (x e y), então podemos customizá-los.
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {}, // Configurações do eixo X
      y: {   // Configurações do eixo Y
        min: 0 // Força o eixo Y a começar do zero
      }
    },
    plugins: {
      legend: {
        display: true, // Garante que a legenda (2024, 2025) seja exibida
      }
    }
  };

  // 3. DADOS DO GRÁFICO
  // Esta é a principal diferença.
  // 'labels' agora representa o eixo X (os meses).
  // 'datasets' é um array com múltiplos objetos, um para cada conjunto de barras.
  public barChartData: ChartData<'bar'> = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      { 
        data: [65, 59, 80, 81, 56], 
        label: 'Vendas 2024',
        backgroundColor: '#36A2EB' 
      },
      { 
        data: [28, 48, 40, 19, 86], 
        label: 'Vendas 2025',
        backgroundColor: '#FF6384'
      }
    ]
  };
}
