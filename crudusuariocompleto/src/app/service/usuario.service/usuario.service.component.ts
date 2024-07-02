import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
 
  private apiUrl = 'http://localhost:8080/api/usuario';  // Atualize para o seu endpoint real

  constructor(private http: HttpClient) {}

  postUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  getAllUsuario():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getUsuarioById(id: number):Observable<any> {
    return this.http.get(this.apiUrl+'/'+id);
  }
  
  updateUsuario(id: number,usuario:any):Observable<any> {
    return this.http.put(this.apiUrl+'/'+id,usuario);
  }

  deleteUsuario(id: number):Observable<any> {
    return this.http.delete(this.apiUrl+'/'+id);
  }

  getUsuarioByDepartamento(departamentoId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/departamento/'+departamentoId);
  }


}
