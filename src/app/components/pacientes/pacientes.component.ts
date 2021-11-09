import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  
  pacientes:any = []

  constructor(private pacienteService:PacientesService) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      res => {
        console.log(res);
        this.pacientes = res;
      }
    )
  }

}
