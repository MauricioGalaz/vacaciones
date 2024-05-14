import { Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Importa el componente HomePage

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage, // Asigna el componente HomePage a la ruta 'home'
  },
  {
    path: '', // Define una redirección por defecto
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
