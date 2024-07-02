import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service.component';

describe('usuarioerviceComponent', () => {
  let component: UsuarioService;
  let fixture: ComponentFixture<UsuarioService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
