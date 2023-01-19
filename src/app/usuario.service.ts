import {Usuario} from "./usuario.model";

export class UsuarioService{ //22

  usuarios:Usuario[]=[

    new Usuario("Fernando", "Rojas", "Patron", 23),
    new Usuario("Antonio", "Gordon", "Comisionado", 28)

  ];

  agregarUS(usuario:Usuario){
    this.usuarios.push(usuario); // VENDRIA A SER EL RETURN DE JAVA (19)
  }

  findUS(indice:number){
    let usuario:Usuario=this.usuarios[indice] // 28
    return usuario;
  }

  editarUS(indice:number, usuario:Usuario){
    let usuarioeditado=this.usuarios[indice] // 28
    usuarioeditado.nombre=usuario.nombre;
    usuarioeditado.apellido=usuario.apellido;
    usuarioeditado.rol=usuario.rol;
    usuarioeditado.edad=usuario.edad;
  }

  borrarUS(indice:number){
    this.usuarios.splice(indice,1);
  }
}
