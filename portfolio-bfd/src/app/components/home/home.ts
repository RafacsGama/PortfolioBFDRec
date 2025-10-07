import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  name = signal('Rafael Gama')
  title = signal('Programador Full Stack')
  description = signal('Crio aplicações web mais modernas e responsivas, utilizando as tecnologias mais atuais do mercado.')


  goToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "contact" não encontrado.');
    }
  }
}
