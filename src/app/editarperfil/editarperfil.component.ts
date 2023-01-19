import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioUsuarioService} from "../servicio-usuario.service";
import {UsuarioService} from "../usuario.service";
import {Usuario} from "../usuario.model";

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {
//usaremos private route para
  constructor(private router:Router,
              private miServicio:ServicioUsuarioService,
              private usuarioService:UsuarioService,
              private route:ActivatedRoute)
  { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params["id"];
    let usuario:Usuario=this.usuarioService.findUS(this.indice);
    this.cuadroNombre=usuario.nombre;
    this.cuadroApell=usuario.apellido;
    this.cuadroRol=usuario.rol;
    this.cuadroEdad=usuario.edad;
  }

  redirect(){
    //El objeto esta vacio porque nos dirigimos al HOME (el cual no tiene enlace en el HTML)
    this.router.navigate(["menu"]);
    //28


  }

  usuarios:Usuario[]=[];

  editarUsuario(){ //28
    let miUsuario= new Usuario(
      //this.miServicio.muestramensaje("Nombre del usuario: " + miUsuario.nombre);
      this.cuadroNombre,
      this.cuadroApell,
      this.cuadroRol,
      this.cuadroEdad);
    this.usuarioService.editarUS(this.indice, miUsuario );
    this.router.navigate([""]);//redireccionar a home despues de rellenar un FORM (26)
  }

  eliminaUsuario(){
    this.usuarioService.borrarUS(this.indice);
    this.router.navigate([""]);//29
  }

  cuadroNombre:String="";
  cuadroApell:String="";
  cuadroRol:String="";
  cuadroEdad:number=0;

  indice:number;


}
