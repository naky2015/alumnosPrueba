import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { DatosAlumnoComponent } from './datos-alumno/datos-alumno.component';

export const routes: Routes = [
    { path:"", component: HomeComponent},
    { path: "cursos", component: CursosComponent },
    {path: "data", component: DatosAlumnoComponent},
    {path: "**", redirectTo: ""},
];
