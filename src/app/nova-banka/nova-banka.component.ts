import { Component, OnInit } from '@angular/core';
import { SviServisiService } from '../service/svi-servisi.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-banka',
  templateUrl: './nova-banka.component.html',
  styleUrls: ['./nova-banka.component.css']
})
export class NovaBankaComponent implements OnInit {

  constructor(private service: SviServisiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  formaZaNovuBanku = this.fb.group({
    poslovnoIme: [''],
    pib: ['']
  })

  dodajNovuBanku(){
    var rawFormat = this.formaZaNovuBanku.getRawValue();

    this.service.napraviBanku(rawFormat).subscribe(
      response => console.log("Response od servera " + response),
      error => console.log("Error prilikom kreiranja nove banke " + error)
    )

    this.router.navigate(['/bankaLista'])
  }

}
