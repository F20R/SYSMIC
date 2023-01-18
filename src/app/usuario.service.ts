import {Usuario} from "./usuario.model";

export class UsuarioService{ //22

  usuarios:Usuario[]=[

    new Usuario("Fernando", "Rojas", "Patron", 23),
    new Usuario("Antonio", "Gordon", "Comisionado", 28)

  ];

  agregarUS(usuario:Usuario){
    this.usuarios.push(usuario); // VENDRIA A SER EL RETURN DE JAVA (19)
  }
}
