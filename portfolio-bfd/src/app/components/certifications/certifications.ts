
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;  
  credentialUrl: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class Certifications {
  certifications = signal<Certification[]>([
    {
      title: 'AWS Certified Cloud Practitioner – Foundational',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Setembro 2025',      
      credentialUrl: 'https://www.credly.com/badges/a276a707-2262-4243-bfdc-b487562c666b'
    } 
  ]);
}