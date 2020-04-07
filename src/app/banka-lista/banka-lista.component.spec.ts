import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaListaComponent } from './banka-lista.component';

describe('BankaListaComponent', () => {
  let component: BankaListaComponent;
  let fixture: ComponentFixture<BankaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
