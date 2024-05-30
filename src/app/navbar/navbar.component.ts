import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {filter} from "rxjs";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {ProjectsComponent} from "../projects/projects.component";
import {ResumeComponent} from "../resume/resume.component";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeRoute: string = '';
}
