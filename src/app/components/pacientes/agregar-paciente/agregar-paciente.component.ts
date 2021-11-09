import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {

  paciente ={
    nombre: '',
    edad: '',
    telefono: '',
    direccion: ''
  }

  constructor(private  pacienteService:PacientesService, private router:Router) { }
  
  ngOnInit(): void {
  }
  
  agregarPaciente(){
    console.log(this.paciente);
    this.pacienteService.agregarPaciente(this.paciente).subscribe(
      res=> {
        this.router.navigate(['/pacientes'])
      },err=>{
        console.log(err)
      }
    )
  }
}
