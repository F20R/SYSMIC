import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor() { }

  muestramensaje(mensaje:string){
    alert(mensaje)
  }
}
