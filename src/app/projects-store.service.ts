import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsStoreService {
  private allProjects = [];

  constructor() {
    this.allProjects.push('Proyecto a');
    this.allProjects.push('Segundo');
    this.allProjects.push('Tercero');
  }

  public dispatchProject = values => this.allProjects.push(values);

  public selectProjects = () => this.allProjects;
}
