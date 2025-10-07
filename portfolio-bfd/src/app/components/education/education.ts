import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList: EducationItem[] = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Centro Universitário Maurício de Nassau',
      year: '2021 - 2023',
      details: [
        'Graduado com honras',
        ' Conhecimentos em desenvolvimento web e mobile'
      ]
    },
    {
      degree: 'História',
      institution: 'Universidade Federal de Pernambuco',
      year: '2010 - 2015',
      details: [
        'Bolsista do Grupo de estudos SocioUni (UFPE)',
      ]
    }
  ];  
}
