import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplataListaComponent } from './uplata-lista.component';

describe('UplataListaComponent', () => {
  let component: UplataListaComponent;
  let fixture: ComponentFixture<UplataListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplataListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplataListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
