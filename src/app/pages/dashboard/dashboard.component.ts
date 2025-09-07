import { Component } from '@angular/core';
import { GraficoPizzaComponent } from "../../graficos/grafico-pizza/grafico-pizza.component";
import { GraficoBarraComponent } from "../../graficos/grafico-barra/grafico-barra.component";

@Component({
  selector: 'app-dashboard',
  imports: [GraficoPizzaComponent, GraficoBarraComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
