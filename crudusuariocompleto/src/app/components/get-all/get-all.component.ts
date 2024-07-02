import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service/usuario.service.component';
import { DepartamentoServiceComponent } from '../../service/departamento.service/departamento.service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {

  usuarios: any[] = [];
  departamentos: any[] = [];
  selectedDepartmentId: number | string = ""; 

  constructor(private usuariosService: UsuarioService,
              private departamentoService: DepartamentoServiceComponent,
              private router: Router) {}

  ngOnInit() {
    this.getAllUsuario();
    this.getAllDepartamentos();
    
    const savedDepartmentId = localStorage.getItem('selectedDepartmentId');
    if (savedDepartmentId !== null) {
      this.selectedDepartmentId = savedDepartmentId;
      this.onDepartamentoChange(); 
    }

    this.router.events.subscribe((event: any) => {
      if (event.url && event.url === '/get-all') {
        const savedDepartmentId = localStorage.getItem('selectedDepartmentId');
        if (savedDepartmentId !== null) {
          this.selectedDepartmentId = savedDepartmentId;
          this.onDepartamentoChange(); 
        }
      }
    });
  }

  getAllUsuario() {
    this.usuariosService.getAllUsuario().subscribe((res) => {
      console.log(res);
      this.usuarios = res;
    });
  }

  deleteUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe((res) => {
      console.log(res);
      this.getAllUsuario();
    });
  }

  getUsuarioByDepartamento(id: number) {
    this.usuariosService.getUsuarioByDepartamento(id).subscribe((res) => {
      this.usuarios = res;
    });
  }

  getAllDepartamentos(): void {
    this.departamentoService.getAllDepartamentos().subscribe(res => {
      this.departamentos = res;
    });
  }

  onDepartamentoChange(): void {
    if (this.selectedDepartmentId === "") {
      this.getAllUsuario(); 
    } else {
      this.getUsuarioByDepartamento(+this.selectedDepartmentId); 
    }
    localStorage.setItem('selectedDepartmentId', this.selectedDepartmentId.toString());
  }
}
