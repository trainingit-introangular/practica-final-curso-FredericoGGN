import { Component, OnInit } from '@angular/core';
import { ProjectsStoreService } from 'src/app/projects-store.service';

@Component({
  selector: 'app-find-project',
  templateUrl: './find-project.component.html',
  styleUrls: ['./find-project.component.css']
})
export class FindProjectComponent implements OnInit {

  public nombre = '';
  public allProjects = [];
  public filteredProjects = [];
  public resultsHidden = true;

  constructor(private projectsStore: ProjectsStoreService) { }

  ngOnInit() {
    this.allProjects = this.projectsStore.selectProjects();
  }

  public find() {
    this.filteredProjects = [];
    this.allProjects.forEach(element => {
      if (element.indexOf(this.nombre) > -1 ) {
        this.filteredProjects.push(element);
      }
    });
    if (this.filteredProjects == null || this.filteredProjects.length === 0) {
      this.resultsHidden = true;
    } else {
      this.resultsHidden = false;
    }
  }
}
