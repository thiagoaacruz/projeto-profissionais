import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProfissionaisComponent } from './cadastrar-profissionais.component';

describe('CadastrarProfissionaisComponent', () => {
  let component: CadastrarProfissionaisComponent;
  let fixture: ComponentFixture<CadastrarProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarProfissionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
