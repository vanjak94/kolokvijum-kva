import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SviServisiService } from '../service/svi-servisi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novi-racun',
  templateUrl: './novi-racun.component.html',
  styleUrls: ['./novi-racun.component.css']
})
export class NoviRacunComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: SviServisiService, private router: Router) { }

  ngOnInit(): void {
  }

  formaZaNoviRacun = this.fb.group({
    bankaId: [''],
    brojRacuna: [''],
    stanje: ['']
  })

  dodajNoviRacun(){
    var raw = this.formaZaNoviRacun.getRawValue()

    this.service.napraviRacun(raw).subscribe(
      response => console.log("Response" + response),
      error => console.log("Error" + error)
    )

    this.router.navigate(['/racunLista']);
  }

}
