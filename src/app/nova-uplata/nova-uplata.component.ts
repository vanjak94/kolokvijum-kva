import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SviServisiService } from '../service/svi-servisi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-uplata',
  templateUrl: './nova-uplata.component.html',
  styleUrls: ['./nova-uplata.component.css']
})
export class NovaUplataComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: SviServisiService, private router: Router) { }

  ngOnInit(): void {
  }


  formaZaNovuUplatu = this.fb.group({
    uplatilac: [''],
    primalac: [''],
    iznos: ['']
  })

  dodajNovuUplatu(){
    var raw = this.formaZaNovuUplatu.getRawValue()

    this.service.napraviUplatu(raw).subscribe(
      response => console.log("Response" + response),
      error => console.log("Greska prilikom kreiranja nove uplate " + error)
    )

    this.router.navigate(['/uplataLista'])
  }

}
