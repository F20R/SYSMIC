import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  title = 'Crud';
  public listadeVideos:any= []

  constructor(private RestService:RestService) {
  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('https://127.0.0.1:8000/api/user').subscribe(respuesta =>{
      this.listadeVideos = respuesta;
    })
  }

  public cargarData2(){
    this.RestService.get('').subscribe(respuesta =>{
      this.listadeVideos = respuesta;
    })
  }
}
