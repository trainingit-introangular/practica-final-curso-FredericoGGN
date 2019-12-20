import { Component, OnInit } from '@angular/core';
import { ProjectsStoreService } from 'src/app/projects-store.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {

  public nombre = '';

  constructor(private projectsStore: ProjectsStoreService) { }

  ngOnInit() {
  }

  public send() {
    this.projectsStore.dispatchProject(this.nombre);
  }
}
