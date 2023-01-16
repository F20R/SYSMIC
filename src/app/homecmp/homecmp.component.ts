import { Component, OnInit } from '@angular/core';
import {Usuario} from "../usuario.model";

@Component({
  selector: 'app-homecmp',
  templateUrl: './homecmp.component.html',
  styleUrls: ['./homecmp.component.css']
})
export class HomecmpComponent implements OnInit {

  title = 'SysmicProject';

  titulo="Lista De Usuarios";

  constructor() { }

  ngOnInit(): void {
  }

  usuarios:Usuario[]=[

    new Usuario("Fernando", "Rojas", "Patron", 23),
    new Usuario("Antonio", "Gordon", "Comisionado", 28)

  ];

  agregarUsuario(){
    let miUsuario= new Usuario(
      this.cuadroNombre,
      this.cuadroApell,
      this.cuadroRol,
      this.cuadroEdad);
    this.usuarios.push(miUsuario); // VENDRIA A SER EL RETURN DE JAVA (19)
  }

  cuadroNombre:string="";
  cuadroApell:string="";
  cuadroRol:string="";
  cuadroEdad:number=0;

}
