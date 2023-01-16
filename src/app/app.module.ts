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

const appRoutes:Routes=[

  {path:'', component:HomecmpComponent},
  {path:'contacto', component:ContactocmpComponent},
  {path:'playlist', component:PlaylistcmpComponent},
  {path:'publicaciones', component:PublicacionescmpComponent},

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
    PlaylistcmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AÑADIR ESTO ES FUNDAMENTAÑ PARA INYECTAR LOS METODOS DE ROUTEADO | forRoot <- PARA USAR RUTAS (const NAME)
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
