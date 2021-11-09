import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SignupComponent } from './components/signup/signup.component';
import { AgregarPacienteComponent } from './components/pacientes/agregar-paciente/agregar-paciente.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/pacientes',
    pathMatch: 'full'
  },
  {
    path:'pacientes',
    component:PacientesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'signIn',
    component:SigninComponent
  },
  {
    path:'agregarPaciente',
    component:AgregarPacienteComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
