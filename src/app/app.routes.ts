import { Routes } from '@angular/router';
import { SiteShell } from './layout/site-shell/site-shell';

export const routes: Routes = [
  {
    path: '',
    component: SiteShell,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
        title: 'Jobayer | Software Engineer',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
