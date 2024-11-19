import { Component } from '@angular/core';
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [EmpleadoComponent],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {

}
