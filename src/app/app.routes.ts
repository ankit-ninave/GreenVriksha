import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about').then((m) => m.About),
  },
  {
    path: 'volunteer',
    loadComponent: () => import('./features/volunteer').then((m) => m.Volunteer),
  },
  {
    path: 'drives',
    loadComponent: () => import('./features/drives').then((m) => m.Drives),
  },
  {
    path: 'donate',
    loadComponent: () => import('./features/donate').then((m) => m.Donate),
  },
  {
    path: 'request-plantation',
    loadComponent: () => import('./features/request-plantation').then((m) => m.RequestPlantation),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery').then((m) => m.Gallery),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
