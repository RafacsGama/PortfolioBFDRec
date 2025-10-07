import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Experiences } from './components/experiences/experiences';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';
import { Education } from './components/education/education';
import { Certifications } from './components/certifications/certifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Home, Education, Certifications, Experiences, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-bfd');
}
