import { Component, OnInit } from '@angular/core';
import { SviServisiService } from '../service/svi-servisi.service';

@Component({
  selector: 'app-banka-lista',
  templateUrl: './banka-lista.component.html',
  styleUrls: ['./banka-lista.component.css']
})
export class BankaListaComponent implements OnInit {

  listaBanki = [];
  public ime: string = "vanja";

  constructor(private service: SviServisiService) { }

  ngOnInit(): void {
    this.service.dobaviBanke().subscribe(
      response => this.listaBanki = response,
      error => console.log("Error prilikom dobavljanja svih banki | ", error)
    )
  }

  deleteEntity(id){
    this.service.izbrisiBanku(id).subscribe(
      response => console.log("Response" + response),
      error => console.log("Error " + error)
    )
  }

}
