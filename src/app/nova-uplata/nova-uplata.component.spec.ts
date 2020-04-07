import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaUplataComponent } from './nova-uplata.component';

describe('NovaUplataComponent', () => {
  let component: NovaUplataComponent;
  let fixture: ComponentFixture<NovaUplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaUplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaUplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
