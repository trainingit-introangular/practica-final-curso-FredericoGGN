import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { FindProjectComponent } from './projects/find-project/find-project.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'nuevo',
    component: NewProjectComponent
  },
  {
    path: 'consulta',
    component: FindProjectComponent
  },
  {
    path: 'listado',
    component: ProjectsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
