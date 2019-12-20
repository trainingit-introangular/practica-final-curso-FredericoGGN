import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { FindProjectComponent } from './find-project/find-project.component';


@NgModule({
  declarations: [ProjectsComponent, NewProjectComponent, FindProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule, FormsModule
  ]
})
export class ProjectsModule {
 }
