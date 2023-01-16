import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-publicacionescmp',
  templateUrl: './publicacionescmp.component.html',
  styleUrls: ['./publicacionescmp.component.css']
})
export class PublicacionescmpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    //El objeto esta vacio porque nos dirigimos al HOME (el cual no tiene enlace en el HTML)
    this.router.navigate([""]);
  }








}
