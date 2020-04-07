import { Component, OnInit } from '@angular/core';
import { SviServisiService } from '../service/svi-servisi.service';

@Component({
  selector: 'app-racun-lista',
  templateUrl: './racun-lista.component.html',
  styleUrls: ['./racun-lista.component.css']
})
export class RacunListaComponent implements OnInit {

  listaRacuni = []

  constructor(private service: SviServisiService) { }

  ngOnInit(): void {
    this.service.dobaviRacune().subscribe(
      response => this.listaRacuni = response,
      error => console.log("Error prilikom dobavljanja svih racuna | ", error)
    )
  }

  deleteEntity(id){
    this.service.izbrisiRacun(id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error" + error)
    )
  } 

}
