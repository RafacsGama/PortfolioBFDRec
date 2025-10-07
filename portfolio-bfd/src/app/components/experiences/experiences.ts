import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  responsibilities?: string[];
}

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss'
})
export class Experiences {
  experienceList = signal<ExperienceItem[]>([
    {
      title: 'Analista de soluções 1',
      company: 'Capgemini',
      duration: '2025 - Present',
      responsibilities: [
        'Desenvolvo soluções inovadoras para clientes globais.',
        ' Utilizo tecnologias do ecossistema da linguagem Java.',
        ' Colaboro com equipes multifuncionais para entregar projetos de alta qualidade' 
      ]
    },
    {
      title: 'Instrutor de Programa de Aprendizagem',
      company: 'Espro',
      duration: '2015 - 2025',
      responsibilities: [
        'Ministrei treinamentos de empregabilidade para jovens em situação de vulnerabilidade social.',
        ' Foquei no desenvolvimento de habilidades técnicas e comportamentais.',
        ' Apoiei o desenvolvimento de habilidades digitais essenciais para o mercado de trabalho.'
      ]
    },
  ]); 
}
