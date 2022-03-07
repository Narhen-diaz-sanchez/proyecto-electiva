import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  isUsuario = false

  personas: Usuario[] = [
    {id:1, nombre: "juan", apellido: "Medina"},
    {id:2, nombre: "pedro", apellido: "torres"},
    {id:3, nombre: "maria", apellido: "agudelo"},
    {id:4, nombre: "jose", apellido: "zapata"},
    {id:5, nombre: "elena", apellido: "henao"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
