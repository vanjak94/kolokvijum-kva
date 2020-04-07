import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankaListaComponent } from './banka-lista/banka-lista.component';
import { UplataListaComponent } from './uplata-lista/uplata-lista.component';
import { RacunListaComponent } from './racun-lista/racun-lista.component';
import { NovaBankaComponent } from './nova-banka/nova-banka.component';
import { NovaUplataComponent } from './nova-uplata/nova-uplata.component';
import { NoviRacunComponent } from './novi-racun/novi-racun.component';

@NgModule({
  declarations: [
    AppComponent,
    BankaListaComponent,
    UplataListaComponent,
    RacunListaComponent,
    NovaBankaComponent,
    NovaUplataComponent,
    NoviRacunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
