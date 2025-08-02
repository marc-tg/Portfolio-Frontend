import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-marc';
}
