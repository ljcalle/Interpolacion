import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Juan";

  apellido = "López";

  //edad = 18 
  edad = 18

  empresa = ""


  getEdad() {
    return this.edad;
  }
  /*
  llamaEmpresa(value:String){
  }
*/

}
