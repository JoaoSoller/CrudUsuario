import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-departamento.service',
  templateUrl: './departamento.service.component.html',
  styleUrl: './departamento.service.component.css'
})

export class DepartamentoServiceComponent {
  private apiUrl = 'http://localhost:8080/departamento'; 

   constructor(private http: HttpClient) {}
  
    getAllDepartamentos():Observable<any>{
      return this.http.get(this.apiUrl);
    }
  
    getDepartamentoById(id: number):Observable<any> {
      return this.http.get(this.apiUrl+'/'+id);
    }
  
}
