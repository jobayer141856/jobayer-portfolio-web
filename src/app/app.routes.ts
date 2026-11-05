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
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
        title: 'About | Jobayer',
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/experience/experience').then((m) => m.ExperienceComponent),
        title: 'Experience | Jobayer',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/pages/project-list/project-list').then((m) => m.ProjectList),
        title: 'Projects | Jobayer',
      },
      {
        path: 'projects/:slug',
        loadComponent: () =>
          import('./features/projects/pages/project-detail/project-detail').then(
            (m) => m.ProjectDetail,
          ),
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills').then((m) => m.Skills),
        title: 'Skills | Jobayer',
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./features/education/education').then((m) => m.EducationComponent),
        title: 'Education | Jobayer',
      },
      {
        path: 'publications',
        loadComponent: () =>
          import('./features/publications/publications').then((m) => m.Publications),
        title: 'Publications | Jobayer',
      },
      {
        path: 'certifications',
        loadComponent: () =>
          import('./features/certifications/certifications').then((m) => m.Certifications),
        title: 'Certifications | Jobayer',
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
        title: 'Contact | Jobayer',
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
        title: 'Page Not Found | Jobayer',
      },
    ],
  },
];
