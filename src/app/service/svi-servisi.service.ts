import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanka } from '../model/IBanka';
import { IRacun } from '../model/IRacun';
import { IUplata } from '../model/IUplata';

@Injectable({
  providedIn: 'root'
})
export class SviServisiService {

  constructor(private http: HttpClient) { }

  _url = 'http://localhost:3000/';

  
  // -------------- BANKE -------------------------
  dobaviBanke(): Observable<IBanka[]>{
    return this.http.get<IBanka[]>(this._url + 'banka')
  }

  napraviBanku(forma){
    return this.http.post((this._url + 'banka'), forma)
  }

  izbrisiBanku(id){
    return this.http.delete(this._url + 'banka/' + id)
  }

  // -------------- RACUNI -------------------------
  dobaviRacune(): Observable<IRacun[]>{
    return this.http.get<IRacun[]>(this._url + 'racun')
  }

  napraviRacun(forma){
    return this.http.post((this._url + 'racun'), forma)
  }

  izbrisiRacun(id){
    return this.http.delete(this._url + 'racun/' + id)
  }

  // -------------- UPLATE -------------------------
  dobaviUplate(): Observable<IUplata[]>{
    return this.http.get<IUplata[]>(this._url + 'uplata')
  }

  napraviUplatu(forma){
    return this.http.post((this._url + 'uplata'), forma)
  }

  izbrisiUplatu(id){
    return this.http.delete(this._url + 'uplata/' + id)
  }
}
