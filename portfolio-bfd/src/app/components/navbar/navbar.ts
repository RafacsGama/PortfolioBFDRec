import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  goToHome(){
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "home" não encontrado.');
    }    
  }

  goToAbout(){
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "about" não encontrado.');
    }
  }

  goToEducation(){
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "education" não encontrado.');
    }    
  }

  goToCert(){ 
    const element = document.getElementById('certifications');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "certifications" não encontrado.');
    }  
  }  

  goToXp(){
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "experiences" não encontrado.');
    }
  }

  goToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento com ID "contact" não encontrado.');
    }
  }
}
