import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './core/components/editar-usuario/editar-usuario.component';
import { EstructuraComponent } from './core/components/estructura/estructura.component';
import { RegstroUsuarioComponent } from './core/components/regstro-usuario/regstro-usuario.component';

const routes: Routes = [
  {path:"",component:EstructuraComponent},
  {path:"editar", component:RegstroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
