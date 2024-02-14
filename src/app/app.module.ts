import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { ItensModule } from './itens/itens.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent
  ],
  //inserir ferramentas e MODULOS EXTERNOS
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItensModule,
    
  ],
  //itens que vão ser usados em toda aplicação durante seu funcionamento
  providers: [],
  // componente que vai ser iniciado
  bootstrap: [AppComponent]
})
export class AppModule { }
