import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankaListaComponent } from './banka-lista/banka-lista.component';
import { UplataListaComponent } from './uplata-lista/uplata-lista.component';
import { RacunListaComponent } from './racun-lista/racun-lista.component';
import { NovaBankaComponent } from './nova-banka/nova-banka.component';
import { NovaUplataComponent } from './nova-uplata/nova-uplata.component';
import { NoviRacunComponent } from './novi-racun/novi-racun.component';


const routes: Routes = [
  {path: 'bankaLista', component: BankaListaComponent},
  {path: 'uplataLista', component: UplataListaComponent},
  {path: 'racunLista', component: RacunListaComponent},
  
  {path: 'novaBanka', component: NovaBankaComponent},
  {path: 'novaUplata', component: NovaUplataComponent},
  {path: 'noviRacun', component: NoviRacunComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
