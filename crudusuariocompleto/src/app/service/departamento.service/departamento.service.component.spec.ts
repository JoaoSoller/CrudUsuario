import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoServiceComponent } from './departamento.service.component';

describe('DepartamentoServiceComponent', () => {
  let component: DepartamentoServiceComponent;
  let fixture: ComponentFixture<DepartamentoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartamentoServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
