import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-regstro-usuario',
  templateUrl: './regstro-usuario.component.html',
  styleUrls: ['./regstro-usuario.component.scss']
})
export class RegstroUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario("", "", 0)
   }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.usuario)
  }

}
