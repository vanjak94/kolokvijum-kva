import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunListaComponent } from './racun-lista.component';

describe('RacunListaComponent', () => {
  let component: RacunListaComponent;
  let fixture: ComponentFixture<RacunListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
