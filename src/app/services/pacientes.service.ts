import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private URL= 'http://laravelapi.test/api/pacientes'

  constructor(private http: HttpClient) { }


  getPacientes(){
    return this.http.get<any>(this.URL);
  }

  agregarPaciente(paciente:(any)){
    return this.http.post<any>(this.URL, paciente);
  }

}
