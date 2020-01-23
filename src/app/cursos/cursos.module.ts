import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CursosListaComponent, CursosFormComponent]
})
export class CursosModule { }
