import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service/usuario.service.component';
import { Router } from '@angular/router';
import { DepartamentoServiceComponent } from '../../service/departamento.service/departamento.service.component';

@Component({
  selector: 'app-post-usuario',
  templateUrl: './post-usuario.component.html',
  styleUrls: ['./post-usuario.component.css']
})

export class PostUsuarioComponent implements OnInit {

  postUsuarioForm!: FormGroup;
  departamentos!: any[];

  constructor(
    private usuarioService: UsuarioService, 
    private fb: FormBuilder, 
    private router: Router,
    private departamentoService: DepartamentoServiceComponent
  ) {}

  ngOnInit(): void {
    this.getAllDepartamentos();
    this.postUsuarioForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      departamento: [null, Validators.required]  
     });
  }

  onSubmit(): void {
    if (this.postUsuarioForm.valid) {
      this.departamentoService.getDepartamentoById(this.postUsuarioForm.value.departamento).subscribe(
        res => {
          this.postUsuarioForm.value.departamento = res;
          this.usuarioService.postUsuario(this.postUsuarioForm.value).subscribe(
            response => {
              console.log('Usuário salvo com sucesso!', response);
              this.router.navigateByUrl("/");
            },
            error => {
              console.error('Erro ao salvar usuário', error);
            }
          );
        },
        error => {
          console.error('Erro ao buscar departamento', error);
        }
      );
    }
  }

  getAllDepartamentos(): void {
    this.departamentoService.getAllDepartamentos().subscribe(res => {
      this.departamentos = res;
    });
  }
}
