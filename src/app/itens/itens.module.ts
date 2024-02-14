import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { InserirComponent } from './inserir/inserir.component';



@NgModule({
  declarations: [
    ListagemComponent,
    InserirComponent
  ],
  imports: [
    CommonModule
  ],
  //definir exportação
  exports:[
    ListagemComponent,
    InserirComponent
  ],
})
export class ItensModule { }
