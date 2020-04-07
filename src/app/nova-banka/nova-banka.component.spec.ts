import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaBankaComponent } from './nova-banka.component';

describe('NovaBankaComponent', () => {
  let component: NovaBankaComponent;
  let fixture: ComponentFixture<NovaBankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaBankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaBankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
