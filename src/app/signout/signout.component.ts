import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../usuario.model";

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  //Llevar los datos del padre al componente hijo (20) con @OUTPUT
  @Output() caracteristicasUsuarios = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //Crear el argumento que necesites para agregar la INFO de la raiz padre al hijo (20)
  agregarCaracteristicas(value: string){
    this.caracteristicasUsuarios.emit(value);
  }

}
