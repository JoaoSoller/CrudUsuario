import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service/usuario.service.component';
import { DepartamentoServiceComponent } from '../../service/departamento.service/departamento.service.component';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  departamentos: any[] = [];
  updateUsuarioForm!: FormGroup;
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private departamentoService: DepartamentoServiceComponent
  ) {}

  ngOnInit(): void {
    this.updateUsuarioForm = this.fb.group({
      nome: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      departamento: [null, [Validators.required]]
    });
    this.getAllDepartamentos();
    this.getUsuarioById();
  }

  getUsuarioById(): void {
    this.service.getUsuarioById(this.id).subscribe(res => {
      this.updateUsuarioForm.patchValue({
        nome: res.nome,
        senha: res.senha,
        email: res.email,
        departamento: res.departamento ? res.departamento.id : null 
      });
    });
  }

  updateUsuario(): void {
    if (this.updateUsuarioForm.valid) {
      const usuarioData = this.updateUsuarioForm.value;
      this.departamentoService.getDepartamentoById(usuarioData.departamento).subscribe(departamento => {
        usuarioData.departamento = departamento;
        this.service.updateUsuario(this.id, usuarioData).subscribe(res => {
          if (res.id != null) {
            this.router.navigateByUrl("");
          }
        });
      });
    }
  }

  getAllDepartamentos(): void {
    this.departamentoService.getAllDepartamentos().subscribe(res => {
      this.departamentos = res;
    });
  }
}
