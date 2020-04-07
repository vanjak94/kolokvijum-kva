import { Component, OnInit } from '@angular/core';
import { SviServisiService } from '../service/svi-servisi.service';

@Component({
  selector: 'app-uplata-lista',
  templateUrl: './uplata-lista.component.html',
  styleUrls: ['./uplata-lista.component.css']
})
export class UplataListaComponent implements OnInit {

  listaUplata = []

  constructor(private service : SviServisiService) { }

  ngOnInit(): void {
    this.service.dobaviUplate().subscribe(
      response => this.listaUplata = response,
      error => console.log("Error prilikom dobavljanja liste uplata | ", error)
    )
  }

  deleteEntity(id){
    this.service.izbrisiUplatu(id).subscribe(
      response => console.log("Response " + response),
      error => console.log("Error" + error)
    )
  }

}
