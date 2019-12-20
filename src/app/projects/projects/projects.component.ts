import { Component, OnInit } from '@angular/core';
import { ProjectsStoreService } from 'src/app/projects-store.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public allProjects = [];

  constructor(private projectsStore: ProjectsStoreService) { }

  ngOnInit() {
    this.allProjects = this.projectsStore.selectProjects();
  }
}
