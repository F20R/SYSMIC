import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule} from "@angular/forms";
import {SignoutComponent} from "./signout/signout.component";
import {ContactocmpComponent} from "./contactocmp/contactocmp.component";
import {HomecmpComponent} from "./homecmp/homecmp.component";
import {PublicacionescmpComponent} from "./publicacionescmp/publicacionescmp.component";
import {PlaylistcmpComponent} from "./playlistcmp/playlistcmp.component";
import {RouterModule, Routes} from "@angular/router";
import { MenucmpComponent } from './menu/menu.component';
import {ServicioUsuarioService} from "./servicio-usuario.service";
import {UsuarioService} from "./usuario.service";
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes:Routes=[

  {path:'', component:HomecmpComponent},
  {path:'contacto', component:ContactocmpComponent},
  {path:'playlist', component:PlaylistcmpComponent},
  {path:'publicaciones', component:PublicacionescmpComponent},
  {path:'menu', component:MenucmpComponent},
  {path:'iniciosesion', component:IniciosesionComponent},
  {path:'crearcuenta', component:CrearcuentaComponent},
  {path:'inicio', component:InicioComponent},

]; // crear la variable donde almacenaremos las rutas :D (ROUTING)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    SignoutComponent,
    ContactocmpComponent,
    HomecmpComponent,
    PublicacionescmpComponent,
    PlaylistcmpComponent,
    MenucmpComponent,
    IniciosesionComponent,
    CrearcuentaComponent,
    EditarperfilComponent,
    InicioComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AÑADIR ESTO ES FUNDAMENTAÑ PARA INYECTAR LOS METODOS DE ROUTEADO | forRoot <- PARA USAR RUTAS (const NAME)
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioUsuarioService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
