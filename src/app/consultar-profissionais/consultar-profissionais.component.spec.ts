import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProfissionaisComponent } from './consultar-profissionais.component';

describe('ConsultarProfissionaisComponent', () => {
  let component: ConsultarProfissionaisComponent;
  let fixture: ComponentFixture<ConsultarProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProfissionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
