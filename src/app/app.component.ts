import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, RouterLinkActive, HomeComponent,AboutComponent, ProjectsComponent, ResumeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Portfolio';
}
