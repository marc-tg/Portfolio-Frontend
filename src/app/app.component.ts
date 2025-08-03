import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AnimationComponent } from './components/animation/animation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, TechnologiesComponent, EducationComponent, ProjectsComponent, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-marc';
}
